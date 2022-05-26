import '../styles/globals.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import 'vanilla-tilt/dist/vanilla-tilt'

import type { AppProps } from 'next/app'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: true,
    });
    }, [])
  return <Component {...pageProps} />
}

export default MyApp
