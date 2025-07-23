import { getTranslations } from 'next-intl/server'
import HomeClient from './components/home-client'

type Props = {
  params: { locale: string }
}

export default async function HomePage({ params: { locale } }: Props) {
  // 显式传递locale参数
  const t = await getTranslations({ locale, namespace: 'home' })
  
  const translations = {
    heroTitle: t('heroTitle'),
    heroSubtitle: t('heroSubtitle'),
    heroDescription: t('heroDescription'),
    ctaContact: t('ctaContact'),
    ctaIncubator: t('ctaIncubator'),
    focusTitle: t('focusTitle'),
    focusDescription: t('focusDescription'),
    focusAI: t('focusAI'),
    focusAIDesc: t('focusAIDesc'),
    focusMobile: t('focusMobile'),
    focusMobileDesc: t('focusMobileDesc'),
    focusGaming: t('focusGaming'),
    focusGamingDesc: t('focusGamingDesc'),
    impactTitle: t('impactTitle'),
    impactDescription: t('impactDescription'),
    statsPortfolio: t('statsPortfolio'),
    statsCapital: t('statsCapital'),
    statsExits: t('statsExits'),
    ctaTitle: t('ctaTitle'),
    ctaSubtitle: t('ctaSubtitle'),
    ctaDescription: t('ctaDescription'),
  }

  return <HomeClient translations={translations} />
}
