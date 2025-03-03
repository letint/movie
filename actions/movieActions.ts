"use server";

import { Movie, MovieDTO } from "@/types/movie";
import { mapMovieToDTO } from "@/utils/dto";

const TMBD_API_URL = process.env.TMBD_API_URL;
const TMDB_API_KEY = process.env.TMDB_API_KEY;

export async function getMovies(): Promise<MovieDTO[]> {
  try {
    const response: Response = await fetch(
      `${TMBD_API_URL}/movie/popular?api_key=${TMDB_API_KEY}`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) throw new Error(`Failed to fetch popular movies.`);

    const { results = [] }: { results: Movie[] } = await response.json();
    return results.map(mapMovieToDTO);
  } catch (error) {
    console.error("Error fetching popular movies", error);
    return [];
  }
}

export async function getMovieDetails(
  movieId: number
): Promise<MovieDTO | null> {
  try {
    const response: Response = await fetch(
      `${TMBD_API_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) throw new Error(`Failed to fetch movie details.`);

    const movie: Movie = await response.json();
    return mapMovieToDTO(movie);
  } catch (error) {
    console.error("Error when fetching movie details", error);
    return null;
  }
}
