import React from "react";

const AlbumCard = ({ albumCover, albumName, artists }) => {
  return (
    <div className="album-card">
      <img src={albumCover} alt={`${albumName} album cover`} />
      <h3>{albumName}</h3>
      <p>{artists.join(', ')}</p>
    </div>
  );
};

export default AlbumCard;