import { useQuery } from "@tanstack/react-query";

export type genre = {
    id: string;
    name: string;
}

async function fetchGenres(id?: string) {
    const response = await fetch('http://localhost:3001/genres');
    //filtering 4 now not implemented
    return await response.json();
}

function useGenres(id?: string){
    return useQuery({
        queryKey: ["genres", "list"],
        queryFn: () => fetchGenres(id),
    });
}

export default useGenres;
