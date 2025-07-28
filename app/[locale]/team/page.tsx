import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import TeamClient from '../components/team-client'

type Props = {
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'team' })
  
  return {
    title: `${t('heroTitle')} ${t('heroSubtitle')} - TEST`,
    description: t('heroDescription'),
  }
}

export default async function TeamPage({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: 'team' })
  
  const translations = {
    heroTitle: t('heroTitle'),
    heroSubtitle: t('heroSubtitle'),
    heroDescription: t('heroDescription'),
    joinTitle: t('joinTitle'),
    joinSubtitle: t('joinSubtitle'),
    joinDescription: t('joinDescription'),
    joinButton: t('joinButton'),
  }

  return <TeamClient translations={translations} />
}
