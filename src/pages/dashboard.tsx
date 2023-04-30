// pages/dashboard.tsx
import React from 'react';
import Card from '@/components/Card/Card';
import styles from '@/styles/Dashboard.module.css';

const Dashboard: React.FC = () => {
  const cards = [
    {
      title: 'Sonogram One',
      imgSrc: '/assets/SonogramOne.png',
      altText: 'First Card Image',
      isPdf: false,
    },
    {
      title: 'Sonogram Two',
      imgSrc: '/assets/SonogramTwo.png',
      altText: 'Second Card Image',
      isPdf: false,
    },
    {
      title: 'Sonogram Three',
      imgSrc: '/assets/SonogramThree.png',
      altText: 'Third Card Image',
      isPdf: false,
    },
    {
      title: 'Sonogram Four',
      imgSrc: '/assets/SonogramFour.png',
      altText: 'Fourth Card Image',
      isPdf: false,
    },
    {
      title: 'Sonogram Five',
      imgSrc: '/assets/SonogramFive.png',
      altText: 'Fifth Card Image',
      isPdf: false,
    },
  ];

  return (
    <div className={styles.dashboardPage}>
      <h1>Dashboard</h1>
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
