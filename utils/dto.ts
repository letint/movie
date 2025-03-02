import { Movie, MovieDTO } from "@/types/movie";

export const mapMovieToDTO = (movie: Movie): MovieDTO => ({
  id: movie.id,
  title: movie.title,
  releaseDate: movie.release_date,
  imagePath: movie.poster_path,
  overview: movie.overview,
});
