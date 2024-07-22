'use client';

import React from 'react';
import '../css/header.css'; 
import Dropdown from '../components/Dropdown';
const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>My Header</h1>
      <div className='Export_btn'>
        <Dropdown/>
      </div>
    </header>
  );
};

export default Header;
