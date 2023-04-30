import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Ellie Rey New &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
