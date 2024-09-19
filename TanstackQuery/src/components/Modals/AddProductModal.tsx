import { Dialog } from "@mui/material";
import AddProduct, { AddProductProps } from "../forms/AddProduct/AddProduct";

interface AddProductModalProps extends AddProductProps{
    open: boolean;
}

export default function AddProductModal({open, productId, editMode = false, handleClose}: AddProductModalProps){
    return(
        <Dialog open = {open} onClose={handleClose} sx={{textAlign: "center"}}>
            <AddProduct  handleClose={handleClose} editMode={editMode} productId={productId} />
        </Dialog>
    );
}