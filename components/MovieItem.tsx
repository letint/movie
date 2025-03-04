import { MovieDTO } from "@/types/movie";
import Image from "next/image";
import { ReleaseDate } from "@/components/ReleaseDate";
import Link from "next/link";

export default function MovieItem({ movie }: { movie: MovieDTO }) {
  return (
    <div className="flex border w-fit sm:w-[460px] rounded-2xl p-1 gap-8 mb-4  max-h-[100px]">
      <Image
        className="rounded-xl object-cover"
        src={`https://image.tmdb.org/t/p/w500${movie.imagePath}`}
        width={72}
        height={100}
        alt={movie.title}
      />
      <div className="flex flex-col justify-evenly">
        <Link href={`/movie/${movie.id}`} as={`/movie/${movie.id}`}  scroll={false}>
          <div className="font-bold text-md cursor-pointer">{movie.title}</div>
        </Link>
        <ReleaseDate releaseDate={movie.releaseDate} />
      </div>
    </div>
  );
}
