import React, { useState } from 'react';
import Card from '@/components/Card/Card';
import styles from '@/styles/Dashboard.module.css';
import { cardsData } from '@/data/cardsData';
import Registries from '@/components/Registries/Registries';
import BabyShowerDirections from '@/components/BabyShowDirections/BabyShowerDirections';

const Dashboard: React.FC = () => {
  const [cards] = useState(cardsData);

  return (
    <div className={styles.dashboardPage}>
      <div className={styles.pageTitle}>Dashboard</div>
      <div className={styles.separator} />
      <BabyShowerDirections />
      <Registries />
      <div className={styles.cardGrid}>
        {cards.map((card, index) => (
          <Card
            key={index}
            imgSrc={card.imgSrc}
            altText={card.altText}
            title={card.title}
            className={styles.card}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
