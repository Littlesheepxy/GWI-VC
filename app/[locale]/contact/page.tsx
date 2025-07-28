import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import ContactClient from '../components/contact-client'

type Props = {
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'contact' })
  
  return {
    title: `${t('heroTitle')} ${t('heroSubtitle1')} ${t('heroSubtitle2')} - TEST`,
    description: t('heroDescription'),
  }
}

export default async function ContactPage({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: 'contact' })
  
  const translations = {
    heroTitle: t('heroTitle'),
    heroSubtitle1: t('heroSubtitle1'),
    heroSubtitle2: t('heroSubtitle2'),
    heroDescription: t('heroDescription'),
    formTitle: t('formTitle'),
    formName: t('formName'),
    formEmail: t('formEmail'),
    formCompany: t('formCompany'),
    formMessage: t('formMessage'),
    formMessagePlaceholder: t('formMessagePlaceholder'),
    formSubmit: t('formSubmit'),
    contactTitle: t('contactTitle'),
    singaporeOffice: t('singaporeOffice'),
    singaporeAddress: t('singaporeAddress'),
    hongkongOffice: t('hongkongOffice'),
    hongkongAddress: t('hongkongAddress'),
    emailLabel: t('emailLabel'),
    ctaTitle: t('ctaTitle'),
    ctaSubtitle: t('ctaSubtitle'),
    ctaDescription: t('ctaDescription'),
    ctaFounders: t('ctaFounders'),
    ctaInvestors: t('ctaInvestors'),
  }

  return <ContactClient translations={translations} />
}
