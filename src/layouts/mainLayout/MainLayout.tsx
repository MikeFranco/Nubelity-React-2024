import React, { ReactNode } from 'react';
import Header from '../../components/common/header/Header';
import SideCart from '../../components/common/sideCart/SideCart';
import Categories from './categories/Categories';
import MUIHeader from '../../components/common/header/Material';

interface IMainLayout {
  children: ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div style={{ width: '93vw' }}>
        <Header />
        {/* <MUIHeader></MUIHeader> */}
        <Categories />
        {children}
      </div>

      <SideCart />
    </div>
  );
};

export default MainLayout;
