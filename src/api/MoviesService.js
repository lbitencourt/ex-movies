import axios from "axios"

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`

export class MoviesService {
  static getMovies() {
    return axios(withBaseUrl('/movie/popular'));
  }

  static getMovieById(movieId) {
    return axios(withBaseUrl(`/movie/${movieId}`));
  }
}