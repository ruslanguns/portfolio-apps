import GlobalStoreProvider from '../shared/contexts/globalStore'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalStoreProvider>
      <Component {...pageProps} />
    </GlobalStoreProvider>
  )
}

export default MyApp
