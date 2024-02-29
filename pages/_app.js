import Layout from '../components/layout/Layout'
import { BlogContextProvider } from '../store/contactContext'
import Head from 'next/head'
import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <BlogContextProvider>
      <Layout>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </BlogContextProvider>
  )
}

export default MyApp
