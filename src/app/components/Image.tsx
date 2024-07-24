import React, { useState } from 'react';
import '../css/imgMenuStyle.css';
import { IconPlus, IconSearch } from '@tabler/icons-react';

const listImage: React.FC = () => {
  const [image, setImage] = useState<{ id: number; name: string; }[]>([
    { id: 1, name: './imageStore/Image 1.jpg' },
    { id: 2, name: './imageStore/Image 2.jpg' },
    { id: 3, name: './imageStore/Image 3.jpg' },
    { id: 4, name: './imageStore/Image 4.jpg' },
    // { id: 5, name: './imageStore/Image 5.jpg' },
    // { id: 6, name: './imageStore/Image 6.jpg' },
    // { id: 7, name: './imageStore/Image 7.jpg' },
    // { id: 8, name: './imageStore/Image 8.jpg' },
    // { id: 9, name: './imageStore/Image 9.jpg' },
    // { id: 10, name: './imageStore/Image 10.jpg' },
    // { id: 11, name: './imageStore/Image 11.jpg' },
    // { id: 12, name: './imageStore/Image 12.jpg' },
    // { id: 13, name: './imageStore/Image 13.jpg' },
  ]);

  const clickAddList = () => {
    const newImage = { id: image.length + 1, name: `Image ${image.length + 1}.jpg` }; //'Image '+ (image.length + 1)
    setImage([...image, newImage]);
  }

  return (
    <div className="bgMargin">
      <div className="search-input-container">
        <IconSearch className="search-icon" />
        <input type="text" placeholder="   Search" className="search-input"></input>
      </div>
      <div className="allImgArea">
        <div className="grid-container">
          {image.map(img => (
            <div key={img.id} className="grid-item">
              <img className="imgStyle" src={img.name} alt={img.name}></img>
            </div>
          ))}
        </div>
      </div>
      <button className="btnPlus" onClick={() => clickAddList()}><IconPlus className="plus-icon"></IconPlus></button>
    </div>
  );
};

export default listImage;