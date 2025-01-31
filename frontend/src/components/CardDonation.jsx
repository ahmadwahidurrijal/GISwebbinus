import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardDonation.module.css';

const CardDonation = ({ title, description, amountNeeded, amountCollected, imageUrl }) => {
    const progress = (amountCollected / amountNeeded) * 100;

    return (
        <div className={styles.card}>
            <img src={imageUrl} alt={title} className={styles.image} />
            <div className={styles.cardBody}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                
                <div className={styles.progressContainer}>
                    <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
                </div>

                <p className={styles.amount}>
                    <strong>{amountCollected.toLocaleString()} / {amountNeeded.toLocaleString()} IDR</strong>
                </p>

                <button className={styles.donateButton}>Donasi Sekarang</button>
            </div>
        </div>
    );
};

// Validasi tipe props
CardDonation.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    amountNeeded: PropTypes.number.isRequired,
    amountCollected: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default CardDonation;
