import AlbumImage from './AlbumImage';
import AlbumTitle from './AlbumTitle';
import Artist from './Artist';

export const AlbumCard = ({ albumCover, albumUrl, albumName, artists, icons }) => {
  return (
    <div className="album-card">
      <AlbumImage imageUrl={albumCover} albumUrl={albumUrl} title={albumName} icons={icons} />
      <AlbumTitle title={albumName} albumUrl={albumUrl} />
      <p className="artist-list">
        <Artist artists={artists} />
      </p>
    </div>
  );
};

export default AlbumCard;