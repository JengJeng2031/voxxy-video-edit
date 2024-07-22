import React, { useState } from 'react';
import { IconSearch, IconPlus } from '@tabler/icons-react';
import '../css/import.css';

const Import: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([
    { id: 1, name: 'Bubble Gum.mp4', src: 'bubble_gum.jpg' },
    { id: 2, name: 'OMG.mp4', src: 'OMG.jpg' },
    { id: 3, name: 'Fancy.mp4', src: 'fancy.jpg' },
    { id: 4, name: 'Talk That Talk.mp4', src: 'talk_that_talk.jpg' },
    { id: 5, name: 'The Feel.mp4', src: 'the_feel.jpg' },
    { id: 6, name: 'OMG.mp4', src: 'OMG.jpg' },
    { id: 7, name: 'Fancy.mp4', src: 'fancy.jpg' },
    { id: 8, name: 'Talk That Talk.mp4', src: 'talk_that_talk.jpg' },
    { id: 9, name: 'The Feel.mp4', src: 'the_feel.jpg' },
    { id: 10, name: 'OMG.mp4', src: 'OMG.jpg' },
  ]);

  const filteredImages = images.filter((image) =>
    image.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddFileClick = () => {
    document.getElementById('file-input')?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map((file, index) => ({
        id: images.length + index + 1,
        name: file.name,
        src: URL.createObjectURL(file),
      }));
      setImages([...images, ...newImages]);
    }
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
      <div className="image-grid-wrapper">
        <div className="image-grid">
          {filteredImages.map((image) => (
            <div key={image.id} className="image-item">
              <img src={image.src} alt={image.name} />
              <p>{image.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='button-div'>
        <button className="add-file-button" onClick={handleAddFileClick}>
          <IconPlus size={24} />
        </button>
        <input
          id="file-input"
          type="file"
          multiple
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default Import;
