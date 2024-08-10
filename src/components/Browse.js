import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {
    useNowPlayingMovies();
    useTopRatedMovies();
    usePopularMovies();
    useUpcomingMovies()
    return(
        <div>
            <Header/>
            <MainContainer/>
            <SecondContainer/>
            {
                /*
                Maincontainer
                -Video bg
                -Video Title
                Second Container
                -Movie List *n
                -Cards *n
                 */
            }
        </div>
    )
}
export default Browse