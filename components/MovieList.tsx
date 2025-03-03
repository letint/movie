import { MovieDTO } from "@/types/movie";
import MovieItem from "./MovieItem";
import { Dialog } from "@/components/ui/dialog";
import MovieDetail from "./MovieDetail";
export default function MovieList({ movies }: { movies: MovieDTO[] }) {
  return (
    <section>
      {movies.map((movie: MovieDTO) => (
        <Dialog key={movie.id}>
          <MovieItem movie={movie} />
          <MovieDetail movie={movie} />
        </Dialog>
      ))}
    </section>
  );
}
