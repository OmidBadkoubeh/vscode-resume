import 'src/styles/globals.css';

import { useEffect } from 'react';
import type { AppProps } from 'next/app';

import Layout from '../components/layout';
import Head from '../components/head';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, []);

  return <Component {...pageProps} />;
}
export default MyApp;
