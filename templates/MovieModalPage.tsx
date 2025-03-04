import { getMovies } from "@/actions/movieActions";
import MovieDetail from "@/components/MovieDetail";
import { MovieDTO } from "@/types/movie";

export default async function MovieModalTemplate({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movies: MovieDTO[] = await getMovies();
  const movie = movies.find((m) => String(m.id) === id) || null;

  if (!movie) return null;

  return <MovieDetail movie={movie} />;
}
