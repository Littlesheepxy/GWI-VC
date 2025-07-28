import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import PortfolioClient from '../components/portfolio-client'

type Props = {
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'portfolio' })
  
  return {
    title: `${t('heroTitle')} ${t('heroSubtitle')} - TEST`,
    description: t('heroDescription'),
  }
}

export default async function PortfolioPage({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: 'portfolio' })
  
  const translations = {
    heroTitle: t('heroTitle'),
    heroSubtitle: t('heroSubtitle'),
    heroDescription: t('heroDescription'),
    filterAll: t('filterAll'),
    filterTechnology: t('filterTechnology'),
    filterHealthcare: t('filterHealthcare'),
    filterFintech: t('filterFintech'),
    filterSustainability: t('filterSustainability'),
    filterConsumer: t('filterConsumer'),
    successTitle: t('successTitle'),
    successDescription: t('successDescription'),
    stat1Number: t('stat1Number'),
    stat1Label: t('stat1Label'),
    stat2Number: t('stat2Number'),
    stat2Label: t('stat2Label'),
    stat3Number: t('stat3Number'),
    stat3Label: t('stat3Label'),
  }

  return <PortfolioClient translations={translations} />
}
