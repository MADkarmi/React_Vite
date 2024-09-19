import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, styled } from "@mui/material";
import { book } from "../../../../DataSource/Books/useBooks";
import { genre } from "../../../../DataSource/Books/useGenres";
import { useState } from "react";
import FormButtons from "./FormButtons";

const StyledTextField = styled(TextField)(() => ({
    margin: "1rem",
    width: "350px",
}));

interface AddProductComponentProps{
    passedProduct: book;
    handleSubmit: (product: book) => void;
    genres: genre[];
    handleClose: () => void;
    editMode?: boolean;
    loadingData?: boolean;
}

export default function AddProductComponent({passedProduct, genres, editMode = false, loadingData = false, handleSubmit, handleClose}: AddProductComponentProps ){
    const [product, setProduct] = useState<book>(passedProduct);
    return(
        <form onSubmit={(e : React.SyntheticEvent) => {
                e.preventDefault();
                handleSubmit(product);
            }}>
                <StyledTextField
                    label="Title"
                    variant="filled"
                    required
                    value={product.title}
                    onChange={(e) => { setProduct({...product, title:e.target.value}) }}
                />
                <StyledTextField
                    label="Author"
                    variant="filled"
                    required
                    value={product.author}
                    onChange={(e) => {setProduct({...product, author:e.target.value})}}

                />
                <StyledTextField
                    label="Description"
                    variant="filled"
                    required
                    value={product.description}
                    onChange={(e) => {setProduct({...product, description: e.target.value})}}
                />
                <StyledTextField
                    label="Year of release"
                    variant="filled"
                    required
                    value={product.year}
                    type="number"
                    inputProps={{
                        min: 0,
                        step: 1
                    }}
                    onChange={(e) => {setProduct({...product, year: Number(e.target.value)})}}
                />
                <FormControl sx={{m: "1rem", width: "350px"}}>
                    <InputLabel id="genreSelectLabel">Genre</InputLabel>
                    <Select
                        labelId="genreSelectLabel"
                        id="genreSelect"
                        value={product.genreId}
                        label="Genre"
                        onChange={(e: SelectChangeEvent) => {setProduct({...product,genreId: e.target.value})}}
                    >
                    {genres.map((genre: genre) => (
                        <MenuItem key={genre.id} value={genre.id}>
                            {genre.name}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>

                <StyledTextField
                    label="Price"
                    variant="filled"
                    required
                    value={product.price}
                    type="number"
                    inputProps={{
                        min: 0,
                        step: "any"
                    }}
                    onChange={(e) => {setProduct({...product, price:Number(e.target.value)})}}
                />
                <StyledTextField
                    label="Available copies"
                    variant="filled"
                    required
                    value={product.copies}
                    type="number"
                    inputProps={{
                        min: 0,
                    }}
                    onChange={(e) => {
                        setProduct({...product,copies: Number(e.target.value)})
                    }}
                />
                <FormButtons
                    isLoading={loadingData}
                    editMode={editMode}
                    handleClose={handleClose}
                    />
            </form>
    );
}