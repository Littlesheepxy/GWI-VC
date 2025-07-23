import { getRequestConfig } from 'next-intl/server'
import { locales, type Locale, defaultLocale } from '../i18n.config'

export default getRequestConfig(async ({ locale }) => {
  // Handle undefined locale by using default locale
  const validLocale = locale || defaultLocale
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(validLocale as Locale)) {
    console.warn(`Invalid locale received: ${locale}, falling back to default: ${defaultLocale}`)
    // Fall back to default locale instead of throwing error
    return {
      locale: defaultLocale,
      messages: (await import(`../messages/${defaultLocale}.json`)).default
    }
  }

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  }
})