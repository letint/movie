export type Movie = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  vote_average: number;
};

export type MovieDTO = Omit<Movie, "release_date" | "poster_path" | 'vote_average'> & {
  releaseDate: string;
  imagePath: string;
  rating: number;
};
