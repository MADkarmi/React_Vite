import { useQuery } from "@tanstack/react-query";


export type book = {
    id: string;
    title: string;
    author: string;
    year: number;
    description: string;
    copies: number;
    price: number;
    genreId: string;
}

async function fetchBooks(searchId?: string) {
    const response = await fetch(`http://localhost:3001/books/${searchId}`);
    //filtering 4 now not implemented
    return await response.json();
}

function useBooks(searchId?: string){
    return useQuery({
        queryKey: ["books", "single", searchId],
        queryFn: () => fetchBooks(searchId),
        enabled: !!searchId,
        staleTime: 1000,
    });
}

export default useBooks;
