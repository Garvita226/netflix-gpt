import { useDispatch } from "react-redux";
import { API_OPTIONS } from "./constants";
import { addGptMovieResults } from "./gptSlice";
import { gptResults } from "./mockGptConstants";

export const useGptSearch = (gptSearchText) => {
  const dispatch = useDispatch();

  const searchMovies = async (movie) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS)
    const json = await data.json();

    const filteredResults = json.results.filter(result => {
      const normalizedMovie = movie.toLowerCase().trim();
      const normalizedTitle = result.title.toLowerCase().trim();
      const regex = new RegExp(`\\b${normalizedMovie}\\b`);
      return regex.test(normalizedTitle);
    });

    return filteredResults;
  }

  const handleGptClick = async () => {
    const searchText = gptSearchText.current.value.toLowerCase().split(' ').join('_');

    for (let key in gptResults) {
      if (key === searchText) {
        const gptSearchResults = gptResults[key];
        const promiseArray = gptSearchResults.map(movie => searchMovies(movie));
        const tmdbResults = await Promise.all(promiseArray)
        console.log(tmdbResults)
        dispatch(addGptMovieResults({ movieNames: gptResults[key], movieResults: tmdbResults }))
        break;
      }
    }
  }

  // const handleGptClick = async() => {
  //   const gptQuery = 'Act as a Movie Recommendation System and suggest some movies for the query: ' + gptSearchText.current.value + '. Only give me names of 5 movies, comma separated like in the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya'

  //   const gptSearchResults = await openai.chat.completions.create({
  //     messages: [{ role: 'user', content: gptQuery }],
  //     model: 'gpt-3.5-turbo',
  //   });

  //   console.log(gptSearchResults)
  // }

  return { handleGptClick };
}