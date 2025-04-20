import React from 'react';
import styled from 'styled-components';
import { BoxIcon } from './BoxIcon';

export const Header = () => {
  return (
    <ContainerHeader>
      <div>
        <div>
          <BoxIcon type={'fb'} href={''} />
        </div>
        <div></div>
      </div>
      <div></div>
      <div></div>
    </ContainerHeader>
  );
};

const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
