import { Box, Button } from "@mui/material";

export interface FormButtonsProps{
    isLoading?: boolean;
    editMode?: boolean;
    handleClose: () => void;

}

export default function FormButtons({isLoading, editMode=false, handleClose}:FormButtonsProps){
    return(
        <Box>
            <Button variant="contained" sx={{margin: "2rem"}} onClick={handleClose}>
                Cancel
            </Button>
            {!isLoading &&
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{margin: "2rem"}}
                >
                    {editMode? "Edit Book" : "Add Book" }
                </Button>
            }
        </Box>
    );

}