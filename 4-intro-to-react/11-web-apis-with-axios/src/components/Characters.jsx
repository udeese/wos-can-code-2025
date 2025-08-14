import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import ErrorUI from './ErrorUI';
import styles from '../styles/Characters.module.css';
import CharacterCard from './CharacterCard';

const BASE_URL = 'https://rickandmortyapi.com/api';
const PATH = '/character';

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(null);
  const [endpoint, setEndpoint] = useState(BASE_URL + PATH);

  useEffect(() => {
    let ignore = false;

    if (ignore) return;
    async function fetchCharacters() {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(endpoint);
        if (!ignore) {
          setCharacters(response.data.results);
          setInfo(response.data.info);
        }
      } catch (error) {
        if (!ignore) {
          setError(error.message || 'An unknown error occurrred.');
          console.error('Something happened: ' + error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchCharacters();

    return () => {
      ignore = true;
    };
  }, [endpoint]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorUI />;
  }

  if (characters.length === 0) {
    return <p>No characters loaded.</p>;
  }

  const handleChangeEndpoint = (direction) => {
    switch (direction) {
      case 'prev':
        setEndpoint(info.prev);
        break;
      case 'next':
        setEndpoint(info.next);
        break;
      default:
        break;
    }
  };

  return (
    <Fragment>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button
          type="button"
          className={`btn btn-sm btn-primary ${info.prev ? '' : 'disabled'}`}
          onClick={() => handleChangeEndpoint('prev')}>
          Prev
        </button>
        <button
          type="button"
          className={`btn btn-sm btn-primary ${info.next ? '' : 'disabled'}`}
          onClick={() => handleChangeEndpoint('next')}>
          Next
        </button>
      </div>
      <div className={styles['ram-grid']}>
        {characters.map((char) => (
          <CharacterCard key={char.id} char={char} />
        ))}
      </div>
    </Fragment>
  );
}

export default Characters;
