import React, { useState, useCallback, useEffect } from 'react';
import '../css/dropdown.css';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  // คลิกที่พื้นที่อื่นๆ เพื่อปิดเมนู
  const handleClickOutside = useCallback((event: MouseEvent) => {
    // ตรวจสอบว่า event.target เป็น Node ก่อน
    if (event.target instanceof Node) {
      const dropdownElement = document.querySelector('.dropdown') as Node;
      if (dropdownElement && !dropdownElement.contains(event.target)) {
        setIsOpen(false);
      }
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-btn">Save |</button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#">Save draft</a>
          <a href="#">Save Template</a>
          <a href="#">Export Video</a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
