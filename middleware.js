/**
 * Vercel Edge Middleware for Homepage Personalisation
 * Matcher: Limited to "/" only.
 * No redirects: Rewrites "/" to static variant pages (/v/uk, /v/canada, /v/uae).
 * Bots and search engines always receive the canonical global homepage.
 */

export const config = {
  matcher: ['/'],
};

const BOT_REGEX = /bot|crawler|spider|slurp|bingpreview|facebookexternalhit|lighthouse|headless|pagespeed/i;

function parseCookies(cookieHeader) {
  const list = {};
  if (!cookieHeader) return list;
  cookieHeader.split(';').forEach((cookie) => {
    const parts = cookie.split('=');
    list[parts.shift().trim()] = decodeURIComponent(parts.join('='));
  });
  return list;
}

export default function middleware(request) {
  const url = new URL(request.url);

  // 1. Bots and search engines: Always receive the global homepage (zero cloaking)
  const userAgent = request.headers.get('user-agent') || '';
  if (BOT_REGEX.test(userAgent)) {
    return new Response(null, {
      headers: {
        'x-middleware-next': '1',
        'Vary': 'x-vercel-ip-country, Cookie, User-Agent',
      },
    });
  }

  // 2. Dev / Preview override (?geo=GB|CA|AE|IN|XX)
  // Disabled when VERCEL_ENV is production
  let region = null;
  const isProduction = process.env.VERCEL_ENV === 'production';
  if (!isProduction) {
    const geoParam = url.searchParams.get('geo');
    if (geoParam) {
      const code = geoParam.trim().toUpperCase();
      if (code === 'GB') region = 'uk';
      else if (code === 'CA') region = 'canada';
      else if (code === 'AE') region = 'uae';
      else if (code === 'IN') region = 'india';
      else region = 'global';
    }
  }

  // 3. Cookie override (atech_region: uk | canada | uae | india | global)
  if (!region) {
    const cookies = parseCookies(request.headers.get('cookie') || '');
    const cookieRegion = cookies['atech_region'];
    if (cookieRegion && ['uk', 'canada', 'uae', 'india', 'global'].includes(cookieRegion)) {
      region = cookieRegion;
    }
  }

  // 4. IP-Country Geo Detection from Vercel header
  if (!region) {
    const country = (request.headers.get('x-vercel-ip-country') || '').trim().toUpperCase();
    if (country === 'GB') {
      region = 'uk';
    } else if (country === 'CA') {
      region = 'canada';
    } else if (country === 'AE') {
      region = 'uae';
    } else if (country === 'IN') {
      region = 'india';
    } else {
      region = 'global';
    }
  }

  // 5. Rewrite or Pass-through
  // If region is uk, canada, uae, or india -> rewrite "/" to internal static page "/v/[region]"
  // The URL in the visitor's browser remains "/"
  if (region && region !== 'global') {
    const rewriteUrl = new URL(`/v/${region}/`, request.url);
    return new Response(null, {
      headers: {
        'x-middleware-rewrite': rewriteUrl.toString(),
        'Vary': 'x-vercel-ip-country, Cookie, User-Agent',
      },
    });
  }

  // Global / default -> pass through
  return new Response(null, {
    headers: {
      'x-middleware-next': '1',
      'Vary': 'x-vercel-ip-country, Cookie, User-Agent',
    },
  });
}
