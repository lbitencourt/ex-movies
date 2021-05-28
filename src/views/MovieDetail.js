import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { MoviesService } from "../api/MoviesService";
import { Movie } from "../components/Movie";

export const MovieDetail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  const fetchMovie = async () => {
    const { data } = await MoviesService.getMovieById(id);
    setMovie(data);
  }

  useEffect(() => {
    fetchMovie()
  });

  return <Movie movie={movie} />
}