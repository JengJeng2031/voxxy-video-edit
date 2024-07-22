import React, { useState, useRef } from 'react';
import { IconSearch, IconPlus, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import '../css/effect.css';

interface Effect {
  id: number;
  name: string;
  src: string;
  category: string;
}

const Effect: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [effects, setEffects] = useState<Effect[]>([
    { id: 1, name: 'effect_1', src: 'fancy.jpg', category: 'เลนส์' },
    { id: 2, name: 'effect_2', src: 'fancy.jpg', category: 'เลนส์' },
    { id: 3, name: 'effect_3', src: 'fancy.jpg', category: 'เลนส์' },
    { id: 4, name: 'effect_4', src: 'effect_4.jpg', category: 'เลนส์' },
    { id: 5, name: 'effect_1', src: 'effect_1.jpg', category: 'ย้อนยุค' },
    { id: 6, name: 'effect_2', src: 'effect_2.jpg', category: 'ย้อนยุค' },
    { id: 7, name: 'effect_3', src: 'effect_3.jpg', category: 'ย้อนยุค' },
    { id: 8, name: 'effect_4', src: 'effect_4.jpg', category: 'ย้อนยุค' },
    { id: 9, name: 'effect_1', src: 'effect_1.jpg', category: 'ประกายไฟ' },
    { id: 10, name: 'effect_2', src: 'effect_2.jpg', category: 'ประกายไฟ' },
    { id: 11, name: 'effect_3', src: 'effect_3.jpg', category: 'ประกายไฟ' },
    { id: 12, name: 'effect_4', src: 'effect_4.jpg', category: 'ประกายไฟ' },
  ]);

  const filteredEffects = effects.filter((effect) =>
    effect.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = Array.from(new Set(effects.map(effect => effect.category)));

  const handleAddEffectClick = () => {
    document.getElementById('file-input')?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newEffects = Array.from(files).map((file, index) => ({
        id: effects.length + index + 1,
        name: file.name,
        src: URL.createObjectURL(file),
        category: 'New Effects', // You may want to prompt the user for a category
      }));
      setEffects([...effects, ...newEffects]);
    }
  };

  const scrollRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scroll = (category: string, direction: 'left' | 'right') => {
    const container = scrollRef.current[category];
    if (container) {
      const scrollAmount = 200;
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="effect-container">
      <div className="search-bar">
        <IconSearch className="search-icon" size={20} />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="effect-grid-wrapper">
        {categories.map(category => (
          <div key={category} className="category-section">
            <h3>{category}</h3>
            <div className="scroll-container">
              <button className="scroll-button left" onClick={() => scroll(category, 'left')}>
                <IconChevronLeft size={24} />
              </button>
              <div className="effect-grid" ref={el => scrollRef.current[category] = el}>
                {filteredEffects
                  .filter(effect => effect.category === category)
                  .map((effect) => (
                    <div key={effect.id} className="effect-item">
                      <img src={effect.src} alt={effect.name} />
                      <p>{effect.name}</p>
                    </div>
                  ))}
              </div>
              <button className="scroll-button right" onClick={() => scroll(category, 'right')}>
                <IconChevronRight size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='button-div'>
        <button className="add-effect-button" onClick={handleAddEffectClick}>
          <IconPlus size={24} />
        </button>
        <input
          id="file-input"
          type="file"
          multiple
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default Effect;