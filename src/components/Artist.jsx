import '../index.css';

const Artist = ({ artists }) => {
  return (
    <div>
      {artists.map((artist, index) => (
        <span key={index} className="artist-name">
          <a href={artist.url} target="_blank" rel="noopener noreferrer">
            {artist.name}
          </a>
          {index < artists.length - 1 && ', '}
        </span>
      ))}
    </div>
  )
}
export default Artist;
