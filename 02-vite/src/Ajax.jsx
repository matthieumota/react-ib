import { useEffect, useState } from 'react';
import axios from 'axios';

function Ajax() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    axios.get('https://api.vueflix.boxydev.com/movies').then(response => {
      console.log(response.data);
      setMovies(response.data);
    }).catch(error => {
      setHasError(true);
    }).finally(() => {
      setTimeout(() => setLoading(false), 500);
    });
  }, []);

  // Version async / await
  const fetchMovies = async () => {
    try { // Si l'API ne renvoie pas d'erreurs...
      const response = await axios.get('https://api.vueflix.boxydev.com/movies');
      console.log(response.data);
      setMovies(response.data);
    } catch (error) {
      setHasError(true);
    }

    setTimeout(() => setLoading(false), 500);
  }

  useEffect(() => {
    fetchMovies();
  }, [loading]);

  return (
    <>
      <h2>Films d'une API</h2>
      <button onClick={() => setLoading(true)}>Refresh</button>
      {hasError && !loading && <div>Désolé, l'API est indisponible...</div>}
      {loading && <div style={{ height: 750 }}>Chargement...</div>}
      {!loading && <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.map(movie =>
          <div key={movie.id} style={{ width: '25%' }}>
            <h2 style={{
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden'
            }}>{movie.title}</h2>
            <img src={movie.poster_path} width={150} />
          </div>
        )}
      </div>}
    </>
  );
}

export default Ajax;
