import MovieModalTemplate from "@/templates/MovieModalPage";

export default async function MovieModalPage({ params }: { params: Promise<{ id: string }> }) {
  return <MovieModalTemplate params={params} />;
}