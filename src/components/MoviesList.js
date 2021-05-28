import { MovieItem } from "./MovieItem";

export const MoviesList = ({ movies }) => {
  return (
    < section >
      <ul>
        {movies.map(m => <MovieItem  movie={m} />)}
      </ul>
    </section>
  );
}