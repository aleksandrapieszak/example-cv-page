import '@/styles/globals.css'
import Layout from "../../components/layout/layout";
import {useEffect} from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {

  return(
      <div>
          <Head>
              <title> CV i inne</title>
              <meta httpEquiv="Cache-Control" content="no-store" />
          </Head>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </div>


  )
}
