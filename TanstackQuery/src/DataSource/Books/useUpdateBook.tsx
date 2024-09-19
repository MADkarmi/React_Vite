import { useMutation, useQueryClient } from "@tanstack/react-query";
import { book } from "./useBooks";

async function updateBook({id, title, author, year, copies, price, genreId, description = ""}: book){
    const response =  await fetch(`http://localhost:3001/books/${id}`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
                title,
                author,
                year,
                copies,
                price,
                genreId,
                description
            }),

    });
    return await response.json();
}

function useUpdateBook(){
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateBook,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["books", "list"]
            });
            queryClient.invalidateQueries({
                queryKey: ["booksWithGenres", "list"],
            });
            queryClient.invalidateQueries({
                queryKey: ["books", "single"],
            });

        }
    })
}

export default useUpdateBook;