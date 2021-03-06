import '../styles/globals.css'
import { Provider } from "react-redux";
import Layout from '../components/layout/Layout';
import store from '../store/store';
import Head from "next/head";
import 'moment/locale/id';
import moment from 'moment';

function MyApp({ Component, pageProps }) {
  
  moment.locale('id'); 
  return (
  <Provider store={store}>
      <Head>
        <title>Buku tamu BPS</title>
        <meta
          name="description"
          content="Buku tamu Badan Pusat Statistik Kota Banjarmasin"
        />
        <meta
          name="og:title"
          content="Buku tamu BPS kota Banjarmasin"
        />
    
      </Head>
    <Layout>
        <Component {...pageProps} />
    </Layout>
  </Provider>
  )}

export default MyApp