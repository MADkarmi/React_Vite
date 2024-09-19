import useBooks, { book } from "../../../DataSource/Books/useBooks";
import useAddBook from "../../../DataSource/Books/useAddBook";
import useGenres from "../../../DataSource/Books/useGenres";
import useUpdateBook from "../../../DataSource/Books/useUpdateBook";
import AddProductComponent from "./AddProductFromComponents/AddProductForm";
import LoadingData from "./LoadingData";
import AlertDialog from "../../Modals/AlertDialog";
import HandleTransaction from "./Modals/HandleTransaction";


export interface AddProductProps{
    editMode?: boolean;
    productId?: string;
    handleClose: () => void;
}

export default function AddProduct({handleClose, editMode = false, productId}:AddProductProps){

    const fetchedProduct = useBooks(productId);
    const addBook = useAddBook();
    const genres = useGenres();
    const updateBook = useUpdateBook();


    const handleSubmit = ( product: book) => {
        editMode? updateBook.mutate(product) : addBook.mutate(product);
    }

    const emptyProduct : book = {
        id: "",
        title: "",
        author: "",
        year: 2024,
        description: "",
        copies: 0,
        price: 0,
        genreId: ""
    }
    return(
        <>
        {genres.isLoading?
            <LoadingData handleClose={handleClose}/>:
            genres.status === "error"?
                <AlertDialog open={true} handleClose={handleClose} error={true} message={`Ups, something went wrong.\nFailed to load book data\ntry again`} />
                :
                editMode?
                    fetchedProduct.isLoading || fetchedProduct.isFetching?
                        <LoadingData handleClose={handleClose}/>
                        :
                        <>
                            {updateBook.status !== "success" &&
                                <AddProductComponent
                                    genres={genres.data}
                                    editMode={true}
                                    passedProduct={fetchedProduct.data}
                                    handleClose={handleClose}
                                    handleSubmit={handleSubmit}/>
                            }
                            <HandleTransaction status={updateBook.status} handleClose={handleClose}/>
                        </>

                    :
                    <>
                        {addBook.status !== "success" &&
                            <AddProductComponent
                                genres={genres.data}
                                passedProduct={emptyProduct}
                                handleClose={handleClose}
                                handleSubmit={handleSubmit}/>
                        }
                        <HandleTransaction status={addBook.status} handleClose={handleClose}/>
                    </>
        }
        </>
    );
}