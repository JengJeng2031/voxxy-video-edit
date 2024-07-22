import React, { useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
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
 
  ]);

  const filteredImages = images.filter((image) =>
    image.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    </div>
  );
};

export default Import;