import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import i18n from "@/i18n"
import { I18nextProvider } from 'react-i18next'
import { useRouter } from 'next/router'
export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()
  i18n.changeLanguage(locale)
  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  )
}
