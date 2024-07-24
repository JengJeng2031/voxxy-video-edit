import React, { useState } from 'react';
import '../css/imgMenuStyle.css';
import { IconPlus, IconSearch } from '@tabler/icons-react';

const ListImage: React.FC = () => {
  const [images, setImages] = useState([
    { id: 1, name: 'Image 1' },
    { id: 2, name: 'Image 2' },
    { id: 3, name: 'Image 3' },
    { id: 4, name: 'Image 4' },
    { id: 5, name: 'Image 5' },
    { id: 6, name: 'Image 6' },
    { id: 7, name: 'Image 7' },
    { id: 8, name: 'Image 8' },
    { id: 9, name: 'Image 9' },
    { id: 10, name: 'Image 10' },
    { id: 11, name: 'Image 11' },
    { id: 12, name: 'Image 12' },
    { id: 13, name: 'Image 13' },
  ]);

  function clickAddList() {
    const newId = images.length + 1;
    const newImage = { id: newId, name: `Image ${newId}` };
    setImages([...images, newImage]);
  }

  return (
    <div className="bgMargin">
      <div className="search-input-container">
        <IconSearch className="search-icon" />
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="allImgArea">
        <div className="grid-container">
          {images.map(img => (
            <div key={img.id} className="grid-item">
              {img.name}
            </div>
          ))}
        </div>
      </div>
      <button className="btnPlus" onClick={clickAddList}>
        <IconPlus className="plus-icon" />
      </button>
    </div>
  );
};

export default ListImage;
