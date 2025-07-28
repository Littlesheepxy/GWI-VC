import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import IncubatorClient from '../components/incubator-client'

type Props = {
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'incubator' })
  
  return {
    title: `${t('heroTitle')} ${t('heroSubtitle')} - TEST`,
    description: t('heroDescription'),
  }
}

export default async function IncubatorPage({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: 'incubator' })
  
  const translations = {
    heroTitle: t('heroTitle'),
    heroSubtitle: t('heroSubtitle'),
    heroDescription: t('heroDescription'),
    heroDetail: t('heroDetail'),
    overviewTitle: t('overviewTitle'),
    overviewDescription: t('overviewDescription'),
    overviewDetail: t('overviewDetail'),
    feature1: t('feature1'),
    feature2: t('feature2'),
    feature3: t('feature3'),
    feature4: t('feature4'),
    feature5: t('feature5'),
    offerTitle: t('offerTitle'),
    offerDescription: t('offerDescription'),
    capitalTitle: t('capitalTitle'),
    capitalDesc: t('capitalDesc'),
    mentorshipTitle: t('mentorshipTitle'),
    mentorshipDesc: t('mentorshipDesc'),
    marketingTitle: t('marketingTitle'),
    marketingDesc: t('marketingDesc'),
    productTitle: t('productTitle'),
    productDesc: t('productDesc'),
    networkTitle: t('networkTitle'),
    networkDesc: t('networkDesc'),
    scalingTitle: t('scalingTitle'),
    scalingDesc: t('scalingDesc'),
    processTitle: t('processTitle'),
    processDescription: t('processDescription'),
    step1Title: t('step1Title'),
    step1Desc: t('step1Desc'),
    step2Title: t('step2Title'),
    step2Desc: t('step2Desc'),
    step3Title: t('step3Title'),
    step3Desc: t('step3Desc'),
    step4Title: t('step4Title'),
    step4Desc: t('step4Desc'),
    processButton: t('processButton'),
    ctaTitle: t('ctaTitle'),
    ctaSubtitle: t('ctaSubtitle'),
    ctaDescription: t('ctaDescription'),
    ctaStart: t('ctaStart'),
    ctaStories: t('ctaStories'),
  }

  return <IncubatorClient translations={translations} />
}
