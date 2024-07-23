import React, { useState } from 'react';
import { IconSearch, IconBold, IconUnderline, IconItalic} from '@tabler/icons-react';
import '../css/Text.css';

const Text: React.FC = () => {
  const [boldBoxColor, setBoldBoxColor] = useState('#C3C3C3');
  const [underlineBoxColor, setUnderlineBoxColor] = useState('#C3C3C3');
  const [italicBoxColor, setItalicBoxColor] = useState('#C3C3C3');

  const handleBoldBoxClick = () => {
    setBoldBoxColor(prevColor => (prevColor === '#C3C3C3' ? '#6771F0' : '#C3C3C3'));
  };

  const handleUnderlineBoxClick = () => {
    setUnderlineBoxColor(prevColor => (prevColor === '#C3C3C3' ? '#6771F0' : '#C3C3C3'));
  };

  const handleItalicBoxClick = () => {
    setItalicBoxColor(prevColor => (prevColor === '#C3C3C3' ? '#6771F0' : '#C3C3C3'));
  };

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
        <div className="font-label">Font</div>
        <select className="dropdown">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <div className="font-size-container">
          <div className="font-size-label">Font size</div>
          <input type="number" className="font-size" min="0" max="120" defaultValue="16" />
        </div>
      </div>
      <div className="style-font-container">
        <div className="style-label">Style</div>
        <div className="color-box" onClick={handleBoldBoxClick} style={{ backgroundColor: boldBoxColor }}>
          <IconBold className="icon-style"/>
        </div>
        <div className="color-box" onClick={handleUnderlineBoxClick} style={{ backgroundColor: underlineBoxColor }}>
          <IconUnderline className="icon-style"/>
        </div>
        <div className="color-box" onClick={handleItalicBoxClick} style={{ backgroundColor: italicBoxColor }}>
          <IconItalic className="icon-style"/>
        </div>
      </div>
    </div>
  );
};

export default Text;
