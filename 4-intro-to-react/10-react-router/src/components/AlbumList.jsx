import { useAlbums } from '../hooks/use-albums';
import { Link } from 'react-router';

function AlbumList() {
  const { albums } = useAlbums();

  return (
    <section className="container flex-grow-1">
      <div className="py-5">
        <ul className="list-group">
          {albums.map((album) => (
            <li key={album.id} className="list-group-item">
              <Link
                to={`/albums/${album.id}`}>{`${album.rank}: ${album.albumTitle}`}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default AlbumList;
