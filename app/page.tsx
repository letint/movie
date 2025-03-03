import { getMovies } from "@/actions/movieActions";
import MovieList from "@/components/MovieList";
import { MovieDTO } from "@/types/movie";
import Image from "next/image";

export default async function Home() {
  const movies: MovieDTO[] = await getMovies();

  if (!movies) return null;

  return (
    <main className="flex flex-col justify-top items-center max-w-[480px] m-auto p-4">
      <header className="flex flex-row items-end gap-2 mb-16">
        <Image src="/movieIcon.svg" alt="movie icon" width={40} height={40} />
        <h1 className="text-3xl">movies</h1>
      </header>
      <h2 className="self-start font-bold mb-4">Most popular: </h2>  
      <MovieList movies={movies} />
    </main>
  );
}
