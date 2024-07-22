import React from 'react';
import '../css/homepage.css';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Homepage: React.FC = () => {
  return (
    <div className="home">
      <Header />
      <Sidebar />
    </div>
  );
};

export default Homepage;
