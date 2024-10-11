import React from "react";
import AlbumImage from './AlbumImage';
import AlbumTitle from './AlbumTitle';
import Artist from './Artist';

export const AlbumCard = ({ albumCover, albumUrl, albumName, artists, icons }) => {
  return (
    <div className="album-card">
      <AlbumImage imageUrl={albumCover} albumUrl={albumUrl} title={albumName} icons={icons} />
      <AlbumTitle title={albumName} albumUrl={albumUrl} />
      <p className="artist-list">
        {artists.map((artist, index) => (
          <Artist key={index} name={artist.name} artistUrl={artist.url} />
        ))}
      </p>
    </div>
  );
};

export default AlbumCard;