import React from 'react';
import styles from './styles.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';
import insIcon from '@icons/svgs/insIcon.svg';
import ytbIcon from '@icons/svgs/ytbIcon.svg';
import { NavLink } from 'react-router-dom';
export const BoxIcon = ({ type, href }) => {
  const { boxIcon } = styles;
  const handleRenderIcon = (type) => {
    switch (type) {
      case 'fb':
        return fbIcon;
      case 'instagram':
        return insIcon;
      case 'youtube':
        return ytbIcon;
    }
  }
  return (
    <div className={boxIcon}>
      <NavLink href={href} target="_blank" rel="noopener noreferrer">
        <img src={handleRenderIcon(type)} alt={type} />
      </NavLink>
    </div>
  );
};
