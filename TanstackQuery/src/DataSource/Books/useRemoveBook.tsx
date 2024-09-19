import { useMutation, useQueryClient } from "@tanstack/react-query";

async function removeBook(id: string){
    const response =  await fetch(`http://localhost:3001/books/${id}`, {
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
            },
    });
    return await response.json();
}

function useRemoveBook(){
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: removeBook,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["books", "list"]
            });
            queryClient.invalidateQueries({
                queryKey: ["genres", "list"],
            });
            queryClient.invalidateQueries({
                queryKey: ["booksWithGenres", "list"],
            });
        }
    })
}

export default useRemoveBook;