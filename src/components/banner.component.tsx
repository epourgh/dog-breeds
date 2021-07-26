import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/_banner.module.scss';

const BannerComponent = () => (
  <div className={styles.bannerContent}>
    <h1 className={styles.titleStyle}>
      <Link to="/">Dog Breed Search</Link>
    </h1>
  </div>
);

export default BannerComponent;
