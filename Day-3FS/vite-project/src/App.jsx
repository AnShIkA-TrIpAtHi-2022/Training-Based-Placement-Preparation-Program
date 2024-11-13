import { useState } from 'react';
import './App.css';

function App() {

  const [joke, setjoke] = useState("click the button to get a new joke...");

  async function getjoke(){
    console.log("got");
    try{
      const response = await fetch("https://v2.jokeapi.dev/joke/Any");
      const data = await response.json();
      if(data.type === "single"){
        setjoke(data.joke);
      } else {
        setjoke(data.setup + "  . . . . .  " + data.delivery);
      }
    }
    catch(error){
      console.log(error);
    }
  }

  const [nm, setMovieName] = useState('');
  const [data, setMovies] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${nm}`);
      const data = await response.json();

      if (data.length > 0) {
        const moviesData = data.map((item) => ({
          name: item.show.name,
          description: item.show.summary,
          rating: item.show.rating.average,
          image: item.show.image ? item.show.image.medium : null,
        }));
        setMovies(moviesData);
        console.log(moviesData);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <button onClick={getjoke}>Click to get a joke</button>
      <p>{joke}</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="searchbar"
          placeholder="Enter Movie Name"
          value={nm}
          onChange={(e) => setMovieName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {data.length > 0 ? (
        <section className='card-container'>
          {data.map((movie, index) => (
            <section key={index} className='card'>
              {movie.image && <img src={movie.image} alt={movie.name} />}
              <p><strong>{movie.name}</strong></p>
              <p>{movie.description}</p>
              <p>Rating : <strong>{movie.rating} / 10</strong></p>
            </section>
          ))}
        </section>
      ) : (
        <p>No movies found</p>
      )}
    </>
  );
}

export default App;
