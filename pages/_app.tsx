import type { AppProps } from 'next/app'
import '../public/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp
