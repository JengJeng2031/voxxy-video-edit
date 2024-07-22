import React from 'react';
import { IconSearch, } from '@tabler/icons-react';
import '../css/Import.css';

const Import: React.FC = () => {
  return (
    <div className="container">
      <div className="search-container">
        <IconSearch className="icon" />
        <input type="text" className="search" placeholder="Hah A Rai D Kub P" />
      </div>
      {/* Add your import tool UI here */}
    </div>
  );
};

export default Import;
