import 'semantic-ui-css/semantic.min.css'
import '@/styles/home.css'
import '@/styles/milkcard.css'
import '@/styles/specificmilk.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
