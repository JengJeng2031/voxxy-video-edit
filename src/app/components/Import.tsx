import React, { useState } from 'react';
import { IconSearch, IconPlus } from '@tabler/icons-react';
import '../css/import.css';

const Import: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([
    { id: 1, name: 'Bubble Gum.mp4', src: 'bubble_gum.jpg' },
    { id: 2, name: 'OMG.mp4', src: 'OMG.jpg' },
  ]);

  const filteredImages = images.filter((image) =>
    image.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newImage = {
        id: images.length + 1,
        name: file.name,
        src: URL.createObjectURL(file),
      };
      setImages((prevImages) => [...prevImages, newImage]);
      console.log('File added:', file.name);
    }
  };

  const handleClick = () => {
    document.getElementById('file-input')?.click();
  };

  return (
    <div className="import-container">
      <div className="search-bar">
        <IconSearch className="search-icon" size={20} />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="image-grid">
        {filteredImages.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.src} alt={image.name} />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
      <input
        type="file"
        id="file-input"
        style={{ display: 'none' }}
        onChange={handleAddFile}
        accept="image/*"
      />
      <button className="add-file-button" onClick={handleClick}>
        <IconPlus size={30} />
      </button>
    </div>
  );
};

export default Import;
