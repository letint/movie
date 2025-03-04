import { MovieDTO } from "@/types/movie";
import Image from "next/image";
import { ReleaseDate } from "./ReleaseDate";
import { formatToRoundPerMax } from "@/utils/rate";

export default function MovieDetail({ movie }: { movie: MovieDTO | null }) {
  if (!movie) return null;

  return (
      <div className="flex flex-col sm:flex-row gap-8 p-4">
        <Image
          className="rounded-xl object-cover"
          src={`https://image.tmdb.org/t/p/w500${movie.imagePath}`}
          width={165}
          height={180}
          alt={movie.title}
          loading="eager"
        />
        <div className="flex flex-col gap-4 justify-evenly">
          <div className="flex flex-col md:flex-row text-2xl font-bold gap-4 items-start">
            {movie.title} 
            <span className="font-bold text-xl">⭐ {formatToRoundPerMax(movie.rating)}</span>
          </div>
          <ReleaseDate releaseDate={movie.releaseDate} />
          <div className="text-sm"> {movie.overview}</div>
        </div>
      </div>
  );
}
