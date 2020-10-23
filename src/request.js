import Axios from "axios";
import instance from "./axios";
const APIKey = "7b21481b6c4d5a502389e86d768d63c6";

export const requests = {
  fetchGenres: `/genre/movie/list?api_key=${APIKey}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APIKey}&language=en-US&with_genres=28`,
  fetchAnimationMovies: `/discover/movie?api_key=${APIKey}&language=en-US&with_genres=16`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKey}&language=en-US&with_genres=99`,
  fetchAComedyMovies: `/discover/movie?api_key=${APIKey}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKey}&language=en-US&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKey}&language=en-US&with_genres=10749`,
  fetchNetflixOriginals: `/discover/movie?api_key=${APIKey}&language=en-US&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKey}&language=en-US`,
  fetchTrending: `/trending/all/week?api_key=${APIKey}&language=en-US`,
};
// export async function getGenres() {
//   const genresRequest = await instance.get(requests.fetchGenres);
//   const genres = genresRequest.data.genres.map((el) => {
//     return el;
//   });
// }
