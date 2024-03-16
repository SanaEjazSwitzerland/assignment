import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

const MainLayout = () => {
  return (
    <div>
        <Header />
        <Sidebar />
        <Content />
    </div>
  )
}

export default MainLayout