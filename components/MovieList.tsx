import { MovieDTO } from "@/types/movie";
import MovieItem from "./MovieItem";
export default function MovieList({ movies }: { movies: MovieDTO[] }) {
  return (
    <section className="self-start">
      {movies.map((movie: MovieDTO) => (
          <MovieItem key={movie.id} movie={movie} />
      ))}
    </section>
  );
}
