/**
 * Client-Side Region & Cookie Utilities
 * Cookie: atech_region (values: uk | canada | uae | global)
 * Path: /, SameSite: Lax, Max-Age: 180 days (15552000s)
 * Banner Dismissal Cookie: atech_banner_dismissed_<region>
 */

import { countryToRegion, regions } from '../data/regions';

export const COOKIE_NAME = 'atech_region';
export const COOKIE_MAX_AGE = 180 * 24 * 60 * 60; // 180 days in seconds

export const getCookie = (name) => {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
  return match ? decodeURIComponent(match[3]) : null;
};

export const setCookie = (name, value, maxAge = COOKIE_MAX_AGE) => {
  if (typeof document === 'undefined') return;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax`;
};

export const deleteCookie = (name) => {
  if (typeof document === 'undefined') return;
  document.cookie = `${name}=; path=/; max-age=0; SameSite=Lax`;
};

/**
 * Determine active region based on route, query override, cookie, and server injection.
 */
export const detectClientRegion = () => {
  if (typeof window === 'undefined') return 'global';

  // 1. Direct path check for variant URLs (e.g. /v/uk, /v/canada, /v/uae, /v/india)
  const path = window.location.pathname;
  if (path.startsWith('/v/uk')) return 'uk';
  if (path.startsWith('/v/canada')) return 'canada';
  if (path.startsWith('/v/uae')) return 'uae';
  if (path.startsWith('/v/india')) return 'india';

  // 2. Dev/Preview Query override ?geo=GB|CA|AE|XX (disabled in production)
  const isProduction = import.meta.env.VITE_VERCEL_ENV === 'production';
  if (!isProduction) {
    const params = new URLSearchParams(window.location.search);
    const geoParam = params.get('geo');
    if (geoParam) {
      const mapped = countryToRegion(geoParam);
      if (mapped) return mapped;
    }
  }

  // 3. Cookie override (user explicit choice via region switcher)
  const cookieVal = getCookie(COOKIE_NAME);
  if (cookieVal && regions[cookieVal]) {
    return cookieVal;
  }

  // 4. Server/Edge rewrite injection (from static HTML pre-render on /v/*)
  if (window.__ATECH_REGION__ && regions[window.__ATECH_REGION__]) {
    return window.__ATECH_REGION__;
  }
  const metaRegion = document.querySelector('meta[name="atech-region"]')?.getAttribute('content');
  if (metaRegion && regions[metaRegion]) {
    return metaRegion;
  }

  return 'global';
};

/**
 * Set region preference and refresh page
 */
export const setRegionPreference = (regionId) => {
  if (regionId === 'global' || regionId === 'auto') {
    deleteCookie(COOKIE_NAME);
  } else if (regions[regionId]) {
    setCookie(COOKIE_NAME, regionId);
  }
  // Reload / cleanly without search params
  window.location.href = '/';
};

/**
 * Banner dismissal management
 */
export const isBannerDismissed = (regionId) => {
  if (!regionId || regionId === 'global') return true;
  return getCookie(`atech_banner_dismissed_${regionId}`) === 'true';
};

export const dismissBanner = (regionId) => {
  if (!regionId || regionId === 'global') return;
  setCookie(`atech_banner_dismissed_${regionId}`, 'true');
};
