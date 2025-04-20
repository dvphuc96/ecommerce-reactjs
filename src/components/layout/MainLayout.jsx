import React from 'react';
import { Header, Footer } from '@components';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import styles from './styles.module.scss';

export const MainLayout = () => {
  const { wrapLayout, container } = styles;
  return (
    <>
      <Header />
      <main className={wrapLayout}>
        <div className={container}>
          <Outlet />
          {/* <FloatButton.BackTop
      icon= {<i className="fa-solid fa-arrow-turn-up"></i>}
      type="primary"
      /> */}
          <Footer />
          {/* <ScrollToTop/> */}
        </div>
      </main>
    </>
  );
};

const MainWrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;
