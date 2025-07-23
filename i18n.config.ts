export type Locale = 'en' | 'zh' | 'ar' | 'ja'

export const locales: Locale[] = ['en', 'zh', 'ar', 'ja']
export const defaultLocale: Locale = 'en'

export const localeConfig = {
  en: {
    name: 'English',
    direction: 'ltr' as const,
  },
  zh: {
    name: '中文',
    direction: 'ltr' as const,
  },
  ar: {
    name: 'العربية',
    direction: 'rtl' as const,
  },
  ja: {
    name: '日本語',
    direction: 'ltr' as const,
  },
} as const

export default {
  locales,
  defaultLocale,
  localeConfig,
}