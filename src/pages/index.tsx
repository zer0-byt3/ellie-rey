import Head from 'next/head';
import PhotoGrid from '@/components/PhotoGrid/PhotoGrid';
import styles from '@/styles/Home.module.css';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [inputPasscode, setInputPasscode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const passcode = {
    id: 'happyfamily',
  };

  useEffect(() => {
    const { current: box } = boxRef!;

    setTimeout(() => {
      box?.classList.remove(styles.boxInitial);
      box?.classList.add(styles.animate);
    }, 100);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPasscode(e.target.value);
  };

  const handleEnterButtonClick = () => {
    if (inputPasscode === passcode.id) {
      setIsLoading(true); // set loading state
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 2000); // simulate loading time
    } else {
      alert("Sorry, that's wrong! Try again!");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleEnterButtonClick();
    }
  };

  return (
    <>
      <Head>
        <title>Ellie Rey New</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        />
        <meta property="og:image" content="/assets/baby_girl_painting.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.body}>
          {isLoading ? (
            <div className={styles.loadingContainer}>
              <div className={styles.spinner}></div>
            </div>
          ) : (
            <div className={styles.hero}>
              <div ref={boxRef} className={`${styles.box} ${styles.boxInitial}`}>
                <h2 className={styles.boxTitle}>Welcome to Ellie's World!</h2>
                <label className={styles.inputLabel}>Type passcode below to enter:</label>
                <input
                  className={styles.enterWebsitePasscode}
                  value={inputPasscode}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                />
                <button className={styles.submitButton} onClick={handleEnterButtonClick}>
                  Enter
                </button>
              </div>
            </div>
          )}
          <PhotoGrid />
        </div>
      </main>
    </>
  );
}
