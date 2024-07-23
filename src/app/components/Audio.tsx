import React from 'react';
import '../css/audio.css';

interface AudioItem {
  title: string;
  duration: string;
}

const Audio: React.FC = () => {
  const audioItems: AudioItem[] = [
    { title: "เสียงแมวกรี๊ดดดดดดดดดดดด", duration: "00:30" },
    { title: "เสียงแมวร้อง", duration: "00:14" },
    { title: "เสียงแมวอ้วก", duration: "00:08" },
    { title: "เสียงแมวร้องเพลง", duration: "02:30" },
  ];

  return (
    <div className="templateTool">
      <div className="searchContainer">
        <input type="text" placeholder="🔍 Search" className="searchInput" />
      </div>
      <div className="audioList">
        {audioItems.map((item, index) => (
          <div key={index} className="audioItem">
            <div className="playButton">▶</div>
            <div className="audioInfo">
              <div className="audioTitle">{item.title}</div>
              <div className="audioDuration">{item.duration}</div>
            </div>
          </div>
        ))}
      </div>
      <button className="addAudio">+</button>
    </div>
  );
};

export default Audio;