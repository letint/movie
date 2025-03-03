import { MovieDTO } from "@/types/movie";
import Image from "next/image";
import { DialogTrigger } from "@/components/ui/dialog";
import { ReleaseDate } from "@/components/ReleaseDate";

export default function MovieItem({ movie }: { movie: MovieDTO }) {
  return (
    <div className="flex border rounded-2xl p-1 gap-8 mb-4 min-w-[460px] max-h-[100px]">
      <Image
        className="rounded-xl object-cover"
        src={`https://image.tmdb.org/t/p/w500${movie.imagePath}`}
        width={72}
        height={100}
        alt={movie.title}
      />
      <div className="flex flex-col justify-evenly">
        <DialogTrigger asChild>
          <div className="font-bold text-md cursor-pointer">{movie.title}</div>
        </DialogTrigger>
        <ReleaseDate releaseDate={movie.releaseDate} />
      </div>
    </div>
  );
}
