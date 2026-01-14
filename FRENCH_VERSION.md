# French Version Setup Guide

## Summary

Your Studio Nice Podcast website now supports **both English and French** with proper internationalization!

## ✅ What's Been Implemented

### 1. Internationalization Infrastructure
- ✅ Installed `next-intl` for i18n support
- ✅ Created English translation file (`messages/en.json`)
- ✅ Created French translation file (`messages/fr.json`)
- ✅ Set up locale routing: `/en` for English, `/fr` for French
- ✅ Configured middleware for automatic locale detection
- ✅ Added language switcher component in navbar

### 2. Complete French Translation
All content has been professionally translated to French:
- ✅ Navigation menu
- ✅ Hero section
- ✅ Services/features
- ✅ Pricing plans (Starter/Professional/Premium)
- ✅ Studio showcase
- ✅ FAQ (8 questions)
- ✅ Contact section
- ✅ Footer
- ✅ WhatsApp messages (in French!)
- ✅ Meta tags and SEO

### 3. Domain Configuration
The site is configured to work with:
- **studionicepodcast.com** → English version (`/en`)
- **studionicepodcast.fr** → French version (`/fr`)

### 4. SEO Optimization
- ✅ Proper hreflang tags for SEO
- ✅ Locale-specific metadata
- ✅ Canonical URLs for each domain
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support

---

## 🌐 URL Structure

### English Version
```
https://studionicepodcast.com/ (auto-redirects to /en)
https://studionicepodcast.com/en
```

### French Version
```
https://studionicepodcast.fr/fr
https://studionicepodcast.fr/ (auto-redirects to /fr)
```

---

## 🔄 Language Switcher

A language switcher is now visible in the navigation bar:
- Shows "EN" and "FR" buttons
- Current language is highlighted in gold
- Click to switch between languages
- Works on both desktop and mobile

---

## 📱 WhatsApp Integration (French)

All WhatsApp messages are now in **French** when the user is on the French version:

### Examples:
- **General booking**: "Bonjour ! Je suis intéressé par une séance au Studio Nice Podcast..."
- **Starter plan**: "Bonjour ! Je suis intéressé par le forfait Starter..."
- **Professional plan**: "Bonjour ! Je suis intéressé par le forfait Professionnel..."
- **Premium plan**: "Bonjour ! Je suis intéressé par le forfait Premium..."

---

## 🚀 Deployment Instructions

### Option 1: Single Deployment with Both Languages

1. **Deploy to Vercel:**
   ```bash
   npm run build
   vercel deploy
   ```

2. **Configure Domains:**
   - Add `studionicepodcast.com` as primary domain
   - Add `studionicepodcast.fr` as additional domain

3. **No additional configuration needed!**
   The middleware automatically handles locale routing based on the domain.

### Option 2: Separate Deployments

If you prefer separate deployments:

1. **English Version (.com):**
   - Deploy as usual to Vercel
   - Set `studionicepodcast.com` as domain

2. **French Version (.fr):**
   - Update `middleware.ts` to force French locale:
   ```typescript
   export default createMiddleware({
     locales: ['fr'],
     defaultLocale: 'fr',
     localePrefix: 'as-needed',
   });
   ```
   - Deploy to separate Vercel project
   - Set `studionicepodcast.fr` as domain

---

## 🎯 Testing Locally

### English Version:
```bash
npm run dev
# Visit: http://localhost:3000/en
```

### French Version:
```bash
npm run dev
# Visit: http://localhost:3000/fr
```

### Test Language Switching:
1. Click the "FR" button in the navbar
2. URL changes to `/fr`
3. All content switches to French
4. WhatsApp messages are now in French

---

## 📝 Translation Files Location

```
studionicepodcast/
├── messages/
│   ├── en.json      # English translations
│   └── fr.json      # French translations
├── lib/
│   └── i18n.ts      # i18n configuration
└── middleware.ts    # Locale routing
```

---

## 🔧 How to Update Translations

### To Modify French Content:

Edit `messages/fr.json`:

```json
{
  "hero": {
    "title": "Votre Podcast,",
    "subtitle": "Qualité Professionnelle"
  }
}
```

### To Add New Translations:

1. Add to both `messages/en.json` and `messages/fr.json`
2. Use in components with `useTranslations()`:

```typescript
const t = useTranslations('hero')
<h1>{t('title')}</h1>
```

---

## 📊 Build Output

```
Route (app)                              Size     First Load JS
┌ ● /[locale]                            7.76 kB         106 kB
├   ├ /en
├   └ /fr
```

- **Page size**: 7.76 kB
- **Total JS**: 106 kB (includes both languages)
- **Static generation**: Pre-rendered for fast loading

---

## 🎨 What's Translated

### Navigation
- Home → Accueil
- Services → Services
- Pricing → Tarifs
- Studio → Studio
- FAQ → FAQ
- Book Now → Réserver

### Hero Section
- "Your Podcast, Professional Quality"
- → "Votre Podcast, Qualité Professionnelle"
- "Book Your Session Now"
- → "Réservez Votre Séance"

### Pricing
- Starter → Starter (kept English for brand)
- Professional → Professionnel
- Premium → Premium
- €199/session → 199€/séance
- "Most Popular" → "Plus Populaire"

### All Other Sections
- Complete French translation
- Professional, native-sounding French
- Culturally appropriate for French market

---

## ✨ Key Features

### 1. Automatic Locale Detection
- Detects user's browser language
- Shows appropriate version
- Easy to switch manually

### 2. SEO-Friendly
- Proper hreflang tags
- Locale-specific meta tags
- Separate canonical URLs for each domain
- Sitemap includes both languages

### 3. WhatsApp Integration
- French WhatsApp messages
- Pre-filled with French text
- Direct contact in user's language

### 4. Performance
- Static site generation
- Fast page loads
- Optimized for both languages
- No additional overhead

---

## 🎯 Next Steps

### Recommended:
1. ✅ Deploy to production
2. ✅ Add `studionicepodcast.fr` domain
3. ✅ Test both versions
4. ✅ Test WhatsApp in French
5. ✅ Test language switcher

### Optional Enhancements:
- Add more languages (Spanish, German, etc.)
- Implement automatic language detection based on geolocation
- Add language-specific content (different images, testimonials, etc.)
- Implement hreflang for regional variations (fr-FR, fr-CA, etc.)

---

## 📞 Support

For issues or questions about the French version:
- Check `messages/fr.json` for translations
- Review `lib/i18n.ts` for configuration
- See `middleware.ts` for routing logic

---

**Status**: ✅ Production Ready
**Build**: Successful
**Languages**: English (en), French (fr)
**Domains**: studionicepodcast.com, studionicepodcast.fr

---

Built with ❤️ for the French market
