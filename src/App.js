import React, { useState } from 'react';
import './App.css';

// Sample data for movies (you can replace this with real data from a database)
const movies = [
  {
    id: 1,
    name: "Movie 1",
    description: "Description of Movie 1.",
    releaseDate: "2023-09-13",
    genre: "Action",
    userRating: 80,
    bannerURL: "movie1.jpg"
  },
  {
    id: 2,
    name: "Movie 2",
    description: "Description of Movie 2.",
    releaseDate: "2023-09-14",
    genre: "Drama",
    userRating: 90,
    bannerURL: "movie2.jpg"
  },
  // Add more movie objects here
];

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleViewDetails = (movieId) => {
    const movie = movies.find((m) => m.id === movieId);
    setSelectedMovie(movie);
  };

  const handlePlayNow = () => {
    alert("Movie is Playing");
  };

  return (
    <div className="App">
      <header>
        <h1>Welcome to Movie App</h1>
        <button>Login with Google</button>
      </header>
      <main>
        <nav>
          <ul>
            <li>Movies</li>
            <li>Favourites</li>
            <li>Watchlist</li>
          </ul>
        </nav>
        <section>
          <h2>Movies</h2>
          <input
            type="text"
            placeholder="Search for movies"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <ul>
            {movies
              .filter((movie) =>
                movie.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((movie) => (
                <li key={movie.id}>
                  <div className="movie-card">
                    <img src={movie.bannerURL} alt={movie.name} />
                    <h3>{movie.name}</h3>
                    <p>{movie.genre}</p>
                    <button onClick={() => handleViewDetails(movie.id)}>
                      View Details
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </section>
        {selectedMovie && (
          <section id="movie-details">
            <h2>Movie Details</h2>
            <div id="movie-banner">
              <img src={selectedMovie.bannerURL} alt={selectedMovie.name} />
            </div>
            <h3>{selectedMovie.name}</h3>
            <p>{selectedMovie.description}</p>
            <p>Release Date: {selectedMovie.releaseDate}</p>
            <p>Genre: {selectedMovie.genre}</p>
            <p>User Rating: {selectedMovie.userRating}%</p>
            <button onClick={handlePlayNow}>Play Now</button>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
