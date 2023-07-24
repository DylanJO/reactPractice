import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import './App.css';
import SearchIcon from './search.svg';


// API key URL
const API_URL = 'http://www.omdbapi.com/?apikey=3e91f559';

// const Movie1 = {
//     "Title": "Beavis and Butt-Head",
//     "Year": "1993–2011",
//     "imdbID": "tt0105950",
//     "Type": "series",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMjdkMDNkYjMtNTU0YS00YzVjLTk1NmItYWVjOWNmMWFhMTRlXkEyXkFqcGdeQXVyMzM4NjcxOTc@._V1_SX300.jpg"
// }

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    // fetch API key
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    
    useEffect(() => {
        searchMovies('Butt');
    },[])

    return(
        <div className="app">
            <h1>Butts</h1>

            <div className="search">
                <input
                    placeholder="Seacrh you dingus"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0 ? (

                    <div className="container">
                       {movies.map((movie) => (
                         <MovieCard movie={movie}/>
                       ))}
                    </div>

                ) : (

                    <div className="empty">
                        <h2>No Movies found</h2>
                    </div>

                )
            }
            
        </div>
    );
}

export default App;