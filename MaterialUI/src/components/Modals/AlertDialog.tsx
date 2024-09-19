import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import React, { useState } from "react";

interface AlertDialogProps {
    open : boolean;
    message: string;
    handleClose: () => void;
}

export default function AlertDialog({open, message, handleClose}:AlertDialogProps){
    return(
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"

            >
                <DialogTitle id = "alert-dialog">
                    {message}
                </DialogTitle>
                <DialogActions>
                    <Button variant="contained"
                    color="primary"
                    onClick={handleClose}>
                            OK
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}