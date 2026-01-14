import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  // `requestLocale` is available when `getRequestConfig` is used
  let locale = await requestLocale;

  // Ensure that the locale is a string and valid
  if (typeof locale !== 'string') {
    locale = 'en';
  }

  if (!['en', 'fr'].includes(locale)) {
    locale = 'en';
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
