import React from 'react';
import styles from './BabyShowerDirections.module.css';

const BabyShowerDirections: React.FC = () => {
    const handleMapClick = () => {
        const address = '5976 Chumuckla Highway, Pace, FL 32571';
        const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
        window.open(mapUrl, '_blank');
    };

    const handleEmailClick = () => {
        const email = 'jnew@gulfcoastdesignz.com';
        const mailToUrl = `mailto:${email}`;
        window.open(mailToUrl);
    };

    return (
        <div className={styles.directions}>
            <div className={styles.directionsTitle}>Baby Shower Directions:</div>
            <div className={styles.directionsBody}>
                <p>
                    Our baby shower will take place on June 24sth at 4:00 PM.
                </p>
                <p>
                    The location of the event is{' '}
                    <a
                        href="#"
                        onClick={handleMapClick}
                        className={styles.link}
                    >
                        5976 Chumuckla Highway, Pace, FL 32571
                    </a>
                    .
                </p>
                <p>
                    Please RSVP by May 15th by emailing us at{' '}
                    <a
                        href="#"
                        onClick={handleEmailClick}
                        className={styles.link}
                    >
                        jnew@gulfcoastdesignz.com
                    </a>
                    .
                </p>
            </div>
        </div>
    );
};

export default BabyShowerDirections;
