import React, { useState, useEffect, useRef } from 'react';
import '../css/imgMenuStyle.css';
import '../css/import.css';
import { IconPlus, IconSearch } from '@tabler/icons-react';
import { Url } from 'next/dist/shared/lib/router/router';
import { url } from 'inspector';

const listImage: React.FC = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [width, setWidth] = useState(350);
  const [image, setImage] = useState<{ id: number; name: string; src: string}[]>([
    { id: 1, name: 'Apple.jpg', src: './imageStore/Apple.jpg' },
    { id: 2, name: 'Bag.jpg', src: './imageStore/Bag.jpg'},
    { id: 3, name: 'Headphone.jpg', src: './imageStore/Headphone.jpg' },
    { id: 4, name: 'Watch.jpg', src: './imageStore/Watch.jpg' },
    { id: 5, name: 'image 5.jpg', src: './imageStore/image 5.jpg' },
    { id: 6, name: 'image 6.jpg', src: './imageStore/image 6.jpg' },
    { id: 7, name: 'image 7.jpg', src: './imageStore/image 7.jpg' },
    { id: 8, name: 'image 8.jpg', src: './imageStore/image 8.jpg' },
    { id: 9, name: 'image 9.jpg', src: './imageStore/image 9.jpg' },
    { id: 10, name: 'image 10.jpg', src: './imageStore/image 10.jpg' },
  ]);

  const startResizing = (mouseDownEvent: React.MouseEvent<HTMLDivElement>) => {
    setIsResizing(true);
    mouseDownEvent.preventDefault();
  };

  const stopResizing = () => {
    setIsResizing(false);
  };

  const resize = (mouseMoveEvent: MouseEvent) => {
    if (isResizing && sidebarRef.current) {
      const newWidth = mouseMoveEvent.clientX - sidebarRef.current.getBoundingClientRect().left;
      if (newWidth >= 100 && newWidth <= 800) {
        setWidth(newWidth);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);

    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [isResizing]);

  const clickAddList = () => {
    const newImage = { id: image.length + 1, name: `Image ${image.length + 1}.jpg`, src:''}; //'Image '+ (image.length + 1)
    setImage([...image, newImage]);
  }

  return (
    <div ref={sidebarRef} className="import-tool" style={{ width }}>
    <div className="bgMargin">
      <div className="search-input-container">
        <IconSearch className="search-icon" />
        <input type="text" placeholder="   Search" className="search-input"></input>
      </div>
      <div className="allImgArea">
        <div className="grid-container">
          {image.map(img => (
            <div key={img.id} className="grid-item">
              <img className="imgStyle" src={img.src} alt={img.name}></img>
              <p>{img.name}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="btnPlus" onClick={() => clickAddList()}><IconPlus className="plus-icon"></IconPlus></button>
      <div 
        className="resize-handle" 
        onMouseDown={startResizing}
      />
    </div>
    </div>
  );
};

export default listImage;