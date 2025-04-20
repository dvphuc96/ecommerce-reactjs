import React from 'react';
import styled from 'styled-components';
import { BoxIcon } from './BoxIcon';
import { Menu } from './Menu';
import { dataBoxIcon, dataMenu } from '@constant';
import styles from './styles.module.scss';
import Logo from '@icons/images/logo.png';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import { NavLink } from 'react-router-dom';
export const Header = () => {
  const { containerBoxIcon, containerBox, containerMenu } = styles;
  return (
    <ContainerHeader>
      <div className={containerBox}>
        <div className={containerBoxIcon}>
          {
            dataBoxIcon.map((icon, index) => (
              <BoxIcon key={`box-icon-${index}`} type={icon.type} href={icon.href} />
            ))
          }
        </div>
        <div className={containerMenu}>
          {
            dataMenu.slice(0, 3).map((menu, index) => (
              <Menu key={`menu-bar-left-${index}`} name={menu.name} href={menu.href} />
            ))
          }
        </div>
      </div>
      <div>
        <NavLink to="/">
          <img src={Logo} alt="logo" style={{
            width: '153px',
            height: '53px',
          }} />
        </NavLink>
      </div>
      <div className={containerBox}>
        <div className={containerMenu}>
          {
            dataMenu.slice(3, dataMenu.length).map((menu, index) => (
              <Menu key={`menu-bar-right-${index}`} name={menu.name} href={menu.href} />
            ))
          }
        </div>
        <div className={containerBoxIcon}>
          <img src={reloadIcon} alt="reloadIcon" />
          <img src={heartIcon} alt="heartIcon" />
          <img src={cartIcon} alt="cartIcon" />
        </div>
      </div>
    </ContainerHeader>
  );
};

const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 83px;
  background-color: #ebe6e4;
`;
