import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import '../css/Text.css';

const Text: React.FC = () => {
  return (
    <div className="container">
      <div className="search-container">
        <IconSearch className="icon" />
        <input type="text" className="search" placeholder="Hah A Rai D Kub P" />
      </div>
      <div className="textarea-container">
        <textarea className="textarea" placeholder="Default text"></textarea>
      </div>
      <div className="font-container">
        <div className="search-label">Font</div>
        <select className="dropdown">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <div className="font-size-container">
          <div className="font-size-label">Font size</div>
          <input type="number" className="font-size" min="0" max="48" defaultValue="16" />
        </div>
      </div>
    </div>
  );
};

export default Text;
