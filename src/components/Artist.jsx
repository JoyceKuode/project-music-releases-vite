import React from 'react';

const Artist = ({ name, artistUrl }) => {
  return (
    <a className="artist-link" href={artistUrl} target="_blank" rel="noopener noreferrer">
      {name}
    </a>
  );
};

export default Artist;
