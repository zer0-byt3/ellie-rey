import Head from 'next/head';
import PhotoGrid from '@/components/PhotoGrid/PhotoGrid';
import styles from '@/styles/Home.module.css';
import { useEffect, useRef } from 'react';

export default function Home() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current: box } = boxRef!;

    setTimeout(() => {
      box?.classList.remove(styles.boxInitial);
      box?.classList.add(styles.animate);
    }, 100);
  }, []);

  return (
    <>
      <Head>
        <title>Ellie Rey New</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.body}>
          <div className={styles.hero}>
            <div ref={boxRef} className={`${styles.box} ${styles.boxInitial}`}>
              <h2 className={styles.boxTitle}>Welcome to Ellie's World!</h2>
              <label className={styles.inputLabel}>Type passcode below to enter:</label>
              <input className={styles.enterWebsitePasscode} />
              <button className={styles.submitButton}>Enter</button>
            </div>
          </div>
          <PhotoGrid />
        </div>
      </main>
    </>
  );
}
