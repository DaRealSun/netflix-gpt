import MovieList from "./MovieList";
import {useSelector} from "react-redux";


const SecondContainer = () => {
    const movies = useSelector((store => store.movies))
    return (
        movies.nowPlayingMovies && (
            <div className=" bg-black ">
            {/*
            MovieList - Popular
                MovieCard * n
            MovieList - Now Playing
            MovieList - Trending
            MovieList -
            */}
                <div className="-mt-52 pl-12 relative z-20">
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
                <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
                <MovieList title={"UpComing Movies"} movies={movies.upcomingMovies} />
                </div>

            </div>
        )
    );
};

export default SecondContainer;
