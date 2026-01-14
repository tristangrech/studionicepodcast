# Deployment Guide for Studio Nice Podcast

This website is ready for deployment! Follow the instructions below to get it online.

## Deployment Options

### Option 1: Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Studio Nice Podcast website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Configure Domain**
   - In Vercel dashboard, go to Settings > Domains
   - Add `studionicepodcast.com`
   - Update DNS records as instructed by Vercel

### Option 2: Netlify

1. **Build Settings**
   ```yaml
   Build command: npm run build
   Publish directory: .next
   ```

2. **Deploy**
   - Connect your GitHub repository to Netlify
   - Netlify will auto-deploy on push

### Option 3: Traditional Hosting

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Export static files** (optional)
   ```bash
   npm install -g serve
   npm run build
   serve out
   ```

## Post-Deployment Checklist

- [ ] Update WhatsApp number in `lib/constants.ts` (if needed)
- [ ] Add your actual address in Contact component
- [ ] Update social media links in Footer
- [ ] Add real images to `public/images/` folder
- [ ] Set up Google Analytics
- [ ] Configure Google My Business listing
- [ ] Test WhatsApp contact button
- [ ] Verify all links work correctly
- [ ] Test on mobile devices
- [ ] Check load times and performance

## SEO Optimization

The website includes:
- ✅ Proper meta tags
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Sitemap (automatically generated)
- ✅ Robots.txt
- ✅ Semantic HTML structure
- ✅ Responsive design

## Customization

### Update Contact Information

Edit these files:
- `lib/constants.ts` - WhatsApp number
- `components/Contact.tsx` - Address and hours
- `components/Footer.tsx` - Social media links

### Update Pricing

Edit `components/Pricing.tsx` to change:
- Package names
- Prices
- Features included

### Add Images

1. Add images to `public/images/`
2. Reference them in components: `/images/your-image.jpg`

## Performance Tips

1. **Optimize Images**
   - Use WebP format when possible
   - Compress images before uploading
   - Use Next.js Image component for automatic optimization

2. **Monitor Performance**
   - Set up Google Analytics
   - Use Google PageSpeed Insights
   - Monitor Core Web Vitals

3. **CDN**
   - Vercel provides automatic CDN
   - For other hosts, consider Cloudflare

## Monitoring

Set up these tools:
- Google Analytics 4 - Traffic tracking
- Google Search Console - SEO monitoring
- Hotjar or Microsoft Clarity - User behavior
- Vercel Analytics (if using Vercel)

## Maintenance

### Regular Tasks
- Update content monthly
- Check for broken links quarterly
- Review analytics monthly
- Update Next.js dependencies yearly

### Security
- Keep dependencies updated: `npm audit fix`
- Use HTTPS (automatic on Vercel/Netlify)
- Regular backups

## Analytics Setup

### Google Analytics 4

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Add your measurement ID to `app/layout.tsx`:

```typescript
// Add this in the head section of layout.tsx
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `,
  }}
/>
```

## Support

For issues or questions, contact via WhatsApp: +33 6 78 49 61 26

---

Built with Next.js 14, TypeScript, and Tailwind CSS
