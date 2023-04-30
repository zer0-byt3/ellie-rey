// _app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { GlobalWorkerOptions } from 'pdfjs-dist';

if (typeof window !== 'undefined') {
  GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
