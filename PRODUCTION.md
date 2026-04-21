# Atech Infotech - Production Deployment Guide

## Overview
This is a production-ready React + Vite application. Follow these steps to deploy successfully.

## Pre-Deployment Checklist

- [ ] All tests passing
- [ ] No console errors or warnings
- [ ] Environment variables configured
- [ ] SEO metadata verified
- [ ] Performance optimized
- [ ] Security headers configured

## Build for Production

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Preview the production build locally
npm run preview
```

## Environment Variables

Create a `.env.production` file with your production configuration:

```
VITE_API_URL=https://api.atech.example.com
VITE_API_TIMEOUT=30000
VITE_APP_NAME=Atech Infotech
VITE_ENVIRONMENT=production
```

Refer to `.env.example` for all available options.

## Build Output

The build output is in the `dist/` directory and contains:

- **dist/index.html** - Main entry point
- **dist/assets/** - Optimized JavaScript, CSS, and other assets
  - Vendor bundle (React, React-DOM)
  - App bundle
  - Component chunks for better caching

## Performance Optimizations

✓ Code minification with Terser
✓ Console.log removal in production
✓ Optimized chunk splitting for better caching
✓ Lazy loading support via React Router
✓ CSS minification
✓ Asset compression

## Deployment Options

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
1. Connect your Git repository on Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Traditional Server (Nginx/Apache)
1. Build: `npm run build`
2. Upload `dist/` folder to your server
3. Configure your web server to serve `dist/index.html` for all non-file routes

#### Nginx Configuration Example
```nginx
server {
    listen 80;
    server_name atech.example.com;
    
    root /var/www/dist;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Security headers
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

### Docker Deployment
Create `Dockerfile`:
```dockerfile
# Build stage
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

Build and run:
```bash
docker build -t atech-app .
docker run -p 3000:3000 atech-app
```

## Security Best Practices

1. **HTTPS Only** - Always use HTTPS in production
2. **Security Headers** - Configure on your server:
   - `Content-Security-Policy`
   - `X-Content-Type-Options: nosniff`
   - `X-Frame-Options: SAMEORIGIN`
   - `X-XSS-Protection: 1; mode=block`

3. **Environment Variables** - Never commit `.env.production`
4. **CORS** - Configure CORS headers if using external APIs
5. **Input Validation** - Validate all user inputs

## Monitoring & Analytics

- Set up error tracking (Sentry, LogRocket)
- Configure analytics (Google Analytics, Mixpanel)
- Monitor performance metrics
- Set up alerts for errors

## Troubleshooting

### Blank Page
- Check browser console for errors
- Verify `dist/index.html` is being served
- Check that React is loaded correctly

### 404 on Refresh
- Configure your server to serve `index.html` for all routes
- This is necessary for client-side routing to work

### Build Issues
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

## Maintenance

### Update Dependencies
```bash
npm update
npm audit
npm audit fix
```

### Linting
```bash
npm run lint        # Check for issues
npm run lint:fix    # Auto-fix issues
```

## Support
For issues or questions, contact your development team or refer to official documentation:
- [Vite Docs](https://vite.dev)
- [React Docs](https://react.dev)
- [React Router Docs](https://reactrouter.com)
