import React from 'react';
import styles from './Registries.module.css';

const Registries: React.FC = () => {
  const handleClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className={styles.registries}>
      <div className={styles.registrySectionTitle}>
        <div className={styles.registryButtons}>
          <button className={styles.button} onClick={() => handleClick('http://tgt.gifts/new-baby-new')}>Target Registry</button>
          <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={() => handleClick('http://tgt.gifts/new-baby-new2')}>Target Registry cont.</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registries;
