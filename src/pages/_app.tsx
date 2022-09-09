import '@/styles/globals.css'
import '@/styles/tailwind.css'
import "@/styles/sass/App.scss"

import type { AppProps } from 'next/app'
import AppContext from 'context'
import useInitialState from 'hooks/useInitialState'

const { Provider } = AppContext;


function MyApp({ Component, pageProps }: AppProps) {
  const initialState = useInitialState()
  return (
    <Provider value={initialState}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
