import React from 'react';
import styles from './style.module.scss';

export default function PresentationImage () {

  return (
    <div className={styles.presentationImage}>
      <img className={`${styles.blue} ${styles.blur}`} src="/home/rounded_blue.png" alt="Home image" />
      <img className={styles.blue} src="/home/rounded_blue.png" alt="Home image" />

      <img className={`${styles.gray} ${styles.blur}`} src="/home/gray.png" alt="Home image" />
      <img className={styles.gray} src="/home/gray.png" alt="Home image" />

      <img className={`${styles.white} ${styles.blur}`} src="/home/white.png" alt="Home image" />
      <img className={styles.white} src="/home/white.png" alt="Home image" />

      <img className={`${styles.black} ${styles.blur}`} src="/home/black.png" alt="Home image" />
      <img className={styles.black} src="/home/black.png" alt="Home image" />
    </div>
  );
}
