import { useAlbums } from '../hooks/use-albums';
import { useParams } from 'react-router';

function AlbumDetails() {
  const { albumId } = useParams();
  const { getAlbumById } = useAlbums();
  const album = getAlbumById(Number(albumId));

  return (
    <section className="container flex-grow-1">
      <div className="py-5">
        {album && <h2 className="display-3">{album.albumTitle}</h2>}
        <p>
          <strong>Rank:</strong> {album.rank} <br />
          <strong>Genre:</strong> {album.genre} <br />
          <strong>Artist:</strong> {album.artist} <br />
        </p>
      </div>
    </section>
  );
}

export default AlbumDetails;
