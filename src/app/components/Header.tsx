'use client';

import React from 'react';
import '../css/header.css'; 
const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>My Header</h1>
      <div className='Export_btn'>
          <button>Save</button>
      </div>
    </header>
  );
};

export default Header;
