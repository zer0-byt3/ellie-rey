import { useRouter } from 'next/router'; // Import useRouter
import styles from './Header.module.css';

export default function Header() {
  const router = useRouter(); // Get the router instance

  const showBackButton = router.pathname !== '/'; // Set showBackButton based on the current pathname

  return (
    <header className={styles.header}>
      {showBackButton ? (
        <a href="/" className={styles.backButton}>
          Go Back
        </a>
      ) : null}
      <h1 className={styles.title}>Ellie Rey New</h1>
    </header>
  );
}
