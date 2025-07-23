import { getTranslations } from 'next-intl/server'
import HomeClient from './components/home-client'

export default async function HomePage() {
  const t = await getTranslations('home')
  
  const translations = {
    heroTitle: t('heroTitle'),
    heroSubtitle: t('heroSubtitle'),
    heroDescription: t('heroDescription'),
    ctaContact: t('ctaContact'),
    ctaIncubator: t('ctaIncubator'),
    focusTitle: t('focusTitle'),
    focusDescription: t('focusDescription'),
    impactTitle: t('impactTitle'),
    impactDescription: t('impactDescription'),
    ctaTitle: t('ctaTitle'),
    ctaSubtitle: t('ctaSubtitle'),
    ctaDescription: t('ctaDescription'),
  }

  return <HomeClient translations={translations} />
}
