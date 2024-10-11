import React from 'react';

const AlbumTitle = ({ title, albumUrl }) => {
  return (
    <a className="album-title" href={albumUrl} target="_blank" rel="noopener noreferrer">
      <h3>{title}</h3>
    </a>
  );
};

export default AlbumTitle;