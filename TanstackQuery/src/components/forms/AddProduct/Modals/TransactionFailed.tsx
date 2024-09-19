import { Box, Button, Dialog, Typography } from "@mui/material";
import { useState } from "react";

export default function TransactionFailed(){
    const [open, setOpen] = useState<boolean>(true)
    return(
        <Dialog open={open}>
            <Box className = "flex flex-col m-10">
                <Typography  color='error' align="center">
                    Ups, something went wrong.
                    <br />
                    Failed to update list of Books
                    <br />
                    try again
                </Typography>
                <Button variant="contained" sx={{margin: "2rem"}} onClick={() => setOpen(false)}>
                    OK
                </Button>
            </Box>
        </Dialog>
    )
}