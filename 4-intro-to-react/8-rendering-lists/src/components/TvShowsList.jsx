import { useState } from 'react';
import { tvShows } from '../data/tv-shows';
import styles from '../styles/TvShowsList.module.css';
import TvShowItem from './TvShowItem';
import TvShowFilters from './TvShowFilters';

function TvShowsList() {
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const filteredShows = showOnlyFavorites
    ? tvShows.filter((tvShow) => tvShow.isFavorite)
    : tvShows;

  const handleToggleShowOnlyFavorites = () => {
    setShowOnlyFavorites((prev) => !prev);
  };

  console.log('rendering component');

  return (
    <div className="container mt-3">
      <TvShowFilters
        showOnlyFavorites={showOnlyFavorites}
        handleToggleShowOnlyFavorites={handleToggleShowOnlyFavorites}
      />
      <div className={styles['tvshow-grid']}>
        {filteredShows.map((tvShow) => (
          <TvShowItem key={tvShow.id} tvShow={tvShow} />
        ))}
      </div>
    </div>
  );
}

export default TvShowsList;
