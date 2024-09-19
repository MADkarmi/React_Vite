import { useQuery } from "@tanstack/react-query";
import { genre } from "./useGenres";



export type bookWithGenre = {
    id: string;
    title: string;
    author: string;
    year: number;
    description: string;
    copies: number;
    price: number;
    genreId: string;
    genre: genre;
}


async function fetchBooksWithGenres() {
    const response = await fetch('http://localhost:3001/books?_expand=genre');
    return await response.json();
}

function useBooksWithGenres(){
    return useQuery({
        queryKey: ["booksWithGenres", "list"],
        queryFn: () => fetchBooksWithGenres(),
    });
}
export default useBooksWithGenres;
