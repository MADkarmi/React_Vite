import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Product } from "../../DataSource/Products";
import { Box, styled } from "@mui/system";
import { Button, TextField } from "@mui/material";

const StyledTextField = styled(TextField)(({theme}) => ({
    margin: "1rem",
    width: "350px",
}));

interface AddProductProps{
    handleClose: () => void;
    addProduct: (product : Product) => void;
}

export default function AddProduct({addProduct, handleClose}:AddProductProps){
    const [id, setId] = useState(uuidv4());
    const [productName, setProductName] = useState<string>("");
    const [productType, setProductType] = useState<string>("");
    const [productPrice, setProductPrice] = useState<number>(0);
    const [productAvailability, setProductAvailability] = useState<boolean>(false);
    const [availableItems, setAvailableItems] = useState<number>(0);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        addProduct({id, name: productName, type: productType, price: productPrice, availability: productAvailability, available_items: availableItems});
        handleClose();
    }

    return(
        <form onSubmit={handleSubmit}>
            <StyledTextField
                label="Product Name"
                variant="filled"
                required
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                inputProps={{
                    pattern: "[A-Za-z ]+",
                }}
            />
            <StyledTextField
                label="Product Type"
                variant="filled"
                required
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                inputProps={{
                    pattern: "[A-Za-z ]+",
                }}
            />
            <StyledTextField
                label="Product Price"
                variant="filled"
                required
                value={productPrice}
                type="number"
                inputProps={{
                    min: 0,
                    step: "any"
                }}
                onChange={(e) => setProductPrice(Number(e.target.value))}
            />
            <StyledTextField
                label="Available Items"
                variant="filled"
                required
                value={availableItems}
                type="number"
                inputProps={{
                    min: 0,
                }}
                onChange={(e) => {
                    let numberOfItems = Number(e.target.value);
                    numberOfItems > 0? setProductAvailability(true) : setProductAvailability(false);
                    setAvailableItems(numberOfItems)
                }}
            />
            <Box>
                <Button variant="contained" sx={{margin: "2rem"}} onClick={handleClose}>
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{margin: "2rem"}}
                >
                    Add Product
                </Button>
            </Box>

        </form>
    );
};