import { getTranslations } from 'next-intl/server'
import NavigationClient from './navigation-client'

type Props = {
  locale: string
}

export default async function NavigationWrapper({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: 'navigation' })
  
  const translations = {
    home: t('home'),
    about: t('about'),
    incubator: t('incubator'),
    portfolio: t('portfolio'),
    team: t('team'),
    contact: t('contact'),
    getStarted: t('getStarted'),
  }

  return <NavigationClient translations={translations} locale={locale} />
} 