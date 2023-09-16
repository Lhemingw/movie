import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

//import AddFavourites from './components/AddFavourites';



const App = ()=> {
  const [movies, setMovies] = useState([]); // add state to hold the movie results when we come back for the search
    const [favourites] = useState([]); //took setFavourites out of by favourites
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=45f74583`;
//I have my url call up here, which is not suppose to show.  I have it getMovieRequest with an async
		const response = await fetch(url);//I have an fetch with the url in the ()
		const responseJson = await response.json();
    console.log(responseJson);//Too see if this works

		if (responseJson.Search) {
			setMovies(responseJson.Search);//json logs into console
		}
	};
  useEffect(() => { //the get movie function is going to get called when the page loads only when we add a search bar
	//we want the get movie req to be called whenever the user types
		getMovieRequest(searchValue);//when user types
	}, [searchValue]);
console.log(getMovieRequest);
console.log(setMovies);

	// useEffect(() => {
	// 	const movieFavourites = JSON.parse(
	// 		localStorage.getItem('react-movie-app-favourites')
	// 	);

	// 	if (movieFavourites) {
	// 		setFavourites(movieFavourites);
	// 	}
	// }, []);

	// const saveToLocalStorage = (items) => {
	// 	localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	// };

	// const addFavouriteMovie = (movie) => {
	// 	const newFavouriteList = [...favourites, movie];
	// 	setFavourites(newFavouriteList);
	// 	saveToLocalStorage(newFavouriteList);
	// };

	// const removeFavouriteMovie = (movie) => {
	// 	const newFavouriteList = favourites.filter(
	// 		(favourite) => favourite.imdbID !== movie.imdbID
	// 	);

	// 	setFavourites(newFavouriteList);
	// 	saveToLocalStorage(newFavouriteList);
	// };

  return (
    
<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MovieList
					movies={movies}
					//handleFavouritesClick={addFavouriteMovie}
					//favouriteComponent={AddFavourites}
				/>
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				{/* <MovieListHeading heading='Favourites' /> */}
			</div>
			<div className='row'> 
			{/* this below does not work for some reason */}
					{/* <MovieList
						movies={favourites}
					//handleFavouritesClick={removeFavouriteMovie}
					//favouriteComponent={RemoveFavourites}
				/> */}
			</div>
		</div>
		
		
	);
};

export default App;