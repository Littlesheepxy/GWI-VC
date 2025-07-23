import { getTranslations } from 'next-intl/server'
import FooterClient from './footer-client'

type Props = {
  locale: string
}

export default async function FooterWrapper({ locale }: Props) {
  const tNav = await getTranslations({ locale, namespace: 'navigation' })
  const tFooter = await getTranslations({ locale, namespace: 'footer' })
  
  const translations = {
    nav: {
      about: tNav('about'),
      incubator: tNav('incubator'),
      portfolio: tNav('portfolio'),
      contact: tNav('contact'),
    },
    footer: {
      tagline: tFooter('tagline'),
      vision: tFooter('vision'),
      company: tFooter('company'),
      contact: tFooter('contact'),
      rights: tFooter('rights'),
    }
  }

  return <FooterClient translations={translations} locale={locale} />
} 