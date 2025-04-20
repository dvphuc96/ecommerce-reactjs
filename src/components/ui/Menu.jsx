import React from 'react'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom';
export const Menu = ({ name, href }) => {
    const { menu } = styles;
    return (
        <NavLink to={href} className={menu}>{name}</NavLink>
    )
}
