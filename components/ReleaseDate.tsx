import { formatToYear } from "@/utils/date";
import Image from "next/image";
export function ReleaseDate({ releaseDate }: { releaseDate: string }) {
  return (
    <div className="flex gap-2 text-grey-500">
      <Image
        className="text-bold text-xl"
        src={"../calendarIcon.svg"}
        width={15}
        height={15}
        alt="movie release date"
      />
      {formatToYear(releaseDate)}
    </div>
  );
}
