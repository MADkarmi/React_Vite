import { Box, Button, styled } from "@mui/material";
import AddProductModal from "../Modals/AddProductModal";
import { useState } from "react";

const AddProductButton = styled(Button)(({
    textAlign: "center",
    "&:hover": {
        cursor: "pointer"
    }
}))


export default function Controls(){
    const [openAddProductForm, setAddProductForm] = useState(false);
    const handleAddFormOpen = () => {
        setAddProductForm(true);
    }

    const handleAddFormClose = () => {
        setAddProductForm(false);
    }


    return(
        <Box
            display="flex"
            alignItems="right"
            justifyContent="right"
            marginRight={"15rem"}>

            <AddProductButton variant='contained' onClick={handleAddFormOpen}>
                Add Product
            </AddProductButton>
            <AddProductModal open={openAddProductForm} handleClose = {handleAddFormClose} />

        </Box>
    );
}