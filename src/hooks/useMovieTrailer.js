import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
  
    const getTrailer = async() => {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
      const json = await data.json();
  
      const filterData = json.results.filter(result => result.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addMovieTrailerVideo(trailer));
    }
  
    useEffect(() => {
      getTrailer();
    }, [])
}

export default useMovieTrailer;