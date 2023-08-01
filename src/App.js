import { useEffect, useState } from 'react';
import './App.css';
import searchIcon from './search.svg';
import MoviesCard from './MoviesCard';

//842fea86
const API_KEY = 'ENTER YOUR KEY HERE';

const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;


const  App = () => {

  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useState('');

  const searchMovie = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovie('marvel');
  }, []);

  return (
    <div className='app'>
      <h1>Movie Land</h1>
      <div className='search'>
        <input placeholder='Search for movies' value={search}
        onChange={(event) => setSearch(event.target.value)}
        />
        <img src={searchIcon}  alt="search" onClick={() => searchMovie(search)} />
      
      </div>
      {
        movies?.length > 0
        ? (     
        <div className='container'>
          {movies.map((movie) => (
            <MoviesCard movie={movie} />
          ))}
        </div>
        ) : 
        (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }

      
    </div>
  );
}

export default App;
