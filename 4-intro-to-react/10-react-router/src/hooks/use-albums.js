import { albums } from '../data/albums';
import { useMemo } from 'react';

function useAlbums() {
  const allAlbums = useMemo(() => albums, []);

  const getAlbumById = (id) =>
    allAlbums.find((album) => album.id === id) || null;

  return {
    albums: allAlbums,
    getAlbumById,
  };
}

export { useAlbums };
