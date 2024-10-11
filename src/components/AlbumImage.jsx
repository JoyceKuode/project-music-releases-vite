// This component will display the album cover iamge and link to the album's external URL

import React from 'react';
import './AlbumImage.css';


const AlbumImage = ({ imageUrl, albumUrl, title, icons }) => {
  return (
    <div className="album-image-container">
      <a href={albumUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={`${title} album cover`} />
      </a>
      <div className="overlay">
        <img className="icon favorite-icon" src={icons.favorite} alt="Favorite" />
        <a href={albumUrl} target="_blank" rel="noopener noreferrer">
          <img className="icon play-icon" src={icons.play} alt="Play" />
        </a>
        <img className="icon ellipsis-icon" src={icons.ellipsis} alt="More options" />
      </div>
    </div>
  );
};

export default AlbumImage;