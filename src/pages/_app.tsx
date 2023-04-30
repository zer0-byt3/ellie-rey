import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
