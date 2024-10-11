import React from "react";
import data from "./data.json";
import { AlbumCard } from "./components/AlbumCard";

import playIcon from './assets/icons/play.svg';
import favoriteIcon from './assets/icons/heart.svg';
import ellipsisIcon from './assets/icons/dots.svg'

console.log(data);

const icons = {
  favorite: favoriteIcon,
  play: playIcon,
  ellipsis: ellipsisIcon,
};

const App = () => {
  return (
    <div className="album-list">
      {data.albums.items.map((album, index) => {
        // Extract only relevant data for each album
        const albumName = album.name; // Album name
        const albumUrl = album.external_urls.spotify;
        const albumCover = album.images[1].url; // Second image from array
        const artists = album.artists.map(artist => ({
          name: artist.name,
          url: artist.external_urls.spotify
        }));

        return (
          <AlbumCard
            key={index} // Unique key for each album card
            albumName={albumName}
            albumUrl={albumUrl}
            albumCover={albumCover}
            artists={artists}
            icons={icons}
          />
        );
      })}
    </div>
  );
};

export default App; // Default export for the main entry point
