import { MovieDTO } from "@/types/movie";
import { DialogContent, DialogTitle } from "./ui/dialog";
import Image from "next/image";
import { ReleaseDate } from "./ReleaseDate";
import { formatToRoundPerMax } from "@/utils/rate";
import { notFound } from "next/navigation";

export default function MovieDetail({ movie }: { movie: MovieDTO | null }) {
  if (!movie) return notFound();

  return (
    <DialogContent className="min-w-fit">
      <DialogTitle></DialogTitle>
      <div className="flex flex-col sm:flex-row gap-8 w-[800px] p-4">
        <Image
          className="rounded-xl object-cover"
          src={`https://image.tmdb.org/t/p/w500${movie.imagePath}`}
          width={165}
          height={180}
          alt={movie.title}
          loading="eager"
        />
        <div className="flex flex-col gap-4 justify-evenly">
          <div className="flex text-2xl font-bold gap-4 items-center">
            {movie.title} 
            <span className="font-bold text-xl">⭐ {formatToRoundPerMax(movie.rating)}</span>
          </div>
          <ReleaseDate releaseDate={movie.releaseDate} />
          <div className="text-sm"> {movie.overview}</div>
        </div>
      </div>
    </DialogContent>
  );
}
