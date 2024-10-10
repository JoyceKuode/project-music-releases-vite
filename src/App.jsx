import React from "react";
import data from "./data.json";
import AlbumCard from "./components/AlbumCard";

console.log(data);

export const App = () => {
  return (
    <div className="album-list">
      {data.albums.items.map((album, index) => {
        // Extract only relevant data for each album
        const albumName = album.name; // Album name
        const artists = album.artists.map(artist => artist.name);
        const albumCover = album.images[1].url; // Second image from array

        return (
          <AlbumCard
            key={index} // Unique key for each album card
            albumName={albumName}
            artists={artists}
            albumCover={albumCover}
          />
        );
      })}
    </div>
  );
};
