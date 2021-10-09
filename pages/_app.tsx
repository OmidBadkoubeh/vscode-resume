import '../styles/globals.css';

import { FC, useEffect } from 'react';
import type { AppProps } from 'next/app';

import Layout from '../components/Layout';
import Head from '../components/Head';
import '../styles/globals.css';
import '../styles/themes.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, []);

  return (
    <Layout>
      <Head title={`Omid Badkoubeh | ${pageProps.title}`} />
      <Component {...pageProps} />
    </Layout>
  );
};
export default MyApp;
