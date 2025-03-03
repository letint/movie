import { getMovies } from "@/actions/movieActions";
import MovieDetail from "@/components/MovieDetail";
import { Dialog } from "@/components/ui/dialog";
import { notFound } from "next/navigation";
export default async function MoviePage({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    const movies = await getMovies();
    const movie = movies.find(el => el.id === Number(id)) || null;
    
    return (
        <Dialog open={true}>
            <MovieDetail movie={movie} />
        </Dialog>
    )
}