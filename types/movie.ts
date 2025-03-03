export type Movie = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
};

export type MovieDTO = Omit<Movie, "release_date" | "poster_path"> & {
  releaseDate: string;
  imagePath: string;
};
