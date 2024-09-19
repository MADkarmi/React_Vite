import { useMutation, useQueryClient } from "@tanstack/react-query";
import { book } from "./useBooks";

async function addBook({id, title, author, year, copies, price, genreId, description = ""}: book){
    const response =  await fetch('http://localhost:3001/books', {
        method: "POST",
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

function useAddBook(){
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: addBook,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["books"]
            });
            queryClient.invalidateQueries({
                queryKey: ["booksWithGenres", "list"],
            });
        }
    })
}

export default useAddBook;