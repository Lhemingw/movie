
export default function MovieList(props) {
     //const FavouriteComponent = props.favouriteComponent;

	return (
		<>
		{/* I used a map to map over the movies, and used some bootstrap styling,
		Used an onClick to get the movies to work and tolist. Return a list of movies for us, current movie/index it is on*/}
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
					{/* for each of these moveies we want to render the div and an image tag to display the movie poster */}
					<div
					// Each image is a poster
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						{/* <FavouriteComponent /> */}
					</div>
				</div>
			))}
		</>
	);
};

