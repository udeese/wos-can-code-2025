import { useState } from 'react';
import { tvShows } from '../data/tv-shows';
import styles from '../styles/TvShowsList.module.css';
import TvShowItem from './TvShowItem';
import TvShowFilters from './TvShowFilters';

function TvShowsList() {
  const [shows, setShows] = useState(tvShows);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [ratingsGroup, setRatingsGroup] = useState('all');

  const filteredByRatingsGroup = () => {
    switch (ratingsGroup) {
      case 'all':
        return shows;
      case 'low':
        return shows.filter((show) => show.rating >= 0 && show.rating <= 6);
      case 'mid':
        return shows.filter((show) => show.rating > 6 && show.rating <= 8);
      case 'high':
        return shows.filter((show) => show.rating > 8 && show.rating <= 10);
      default:
        return shows;
    }
  };

  const filteredByFavoriteShows = showOnlyFavorites
    ? filteredByRatingsGroup().filter((tvShow) => tvShow.isFavorite)
    : filteredByRatingsGroup();

  const handleToggleShowOnlyFavorites = () => {
    setShowOnlyFavorites((prev) => !prev);
  };

  const handleChangeRatingsGroup = (event) => {
    setRatingsGroup(event.target.value);
  };

  const handleToggleIsFavorite = (targetId) => {
    const toggledShows = shows.map((show) => {
      if (show.id === targetId) {
        return { ...show, isFavorite: !show.isFavorite };
      }
      return show;
    });

    setShows(toggledShows);
  };

  const handleDeleteTvShow = (targetId) => {
    const filteredShows = shows.filter((show) => show.id !== targetId);
    setShows(filteredShows);
  };

  return (
    <div className="container mt-3">
      <TvShowFilters
        showOnlyFavorites={showOnlyFavorites}
        handleToggleShowOnlyFavorites={handleToggleShowOnlyFavorites}
        handleChangeRatingsGroup={handleChangeRatingsGroup}
      />
      <div className={styles['tvshow-grid']}>
        {filteredByFavoriteShows.map((tvShow) => (
          <TvShowItem
            key={tvShow.id}
            tvShow={tvShow}
            handleToggleIsFavorite={handleToggleIsFavorite}
            handleDeleteTvShow={handleDeleteTvShow}
          />
        ))}
      </div>
    </div>
  );
}

export default TvShowsList;
