import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import AboutClient from '../components/about-client'

type Props = {
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'about' })
  
  return {
    title: `${t('heroTitle')} ${t('heroSubtitle')} - TEST`,
    description: t('heroDescription'),
  }
}

export default async function AboutPage({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: 'about' })
  
  const translations = {
    heroTitle: t('heroTitle'),
    heroSubtitle: t('heroSubtitle'),
    heroDescription: t('heroDescription'),
    missionTitle: t('missionTitle'),
    missionDescription: t('missionDescription'),
    missionDetail: t('missionDetail'),
    approachTitle: t('approachTitle'),
    approachDescription: t('approachDescription'),
    focusTitle: t('focusTitle'),
    focusDescription: t('focusDescription'),
    focusAI: t('focusAI'),
    focusAIDesc: t('focusAIDesc'),
    focusMobile: t('focusMobile'),
    focusMobileDesc: t('focusMobileDesc'),
    focusGaming: t('focusGaming'),
    focusGamingDesc: t('focusGamingDesc'),
    foundryTitle: t('foundryTitle'),
    foundryDescription: t('foundryDescription'),
    foundryDetail: t('foundryDetail'),
    foundryButton: t('foundryButton'),
  }

  return <AboutClient translations={translations} />
}
