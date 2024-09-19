import { Dialog } from "@mui/material";
import AddProduct from "../forms/AddProduct";
import { Product } from "../../DataSource/Products";

interface AddProductModalProps{
    open: boolean;
    handleClose: () => void;
    addProduct: (product: Product) => void;
}

export default function AddProductModal({open, handleClose, addProduct}: AddProductModalProps){
    return(
        <Dialog open = {open} onClose={handleClose}  style={{textAlign: "center"}}>
            <AddProduct addProduct={addProduct} handleClose={handleClose}/>
        </Dialog>
    );
}