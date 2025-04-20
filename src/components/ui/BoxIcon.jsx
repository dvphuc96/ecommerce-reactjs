import React from 'react';
import styles from './styles.module.scss';
export const BoxIcon = ({ type, href }) => {
  return <div className={styles.boxIcon}>{type}</div>;
};
