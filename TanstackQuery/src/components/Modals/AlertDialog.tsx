import { Box, Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

interface AlertDialogProps {
    open : boolean;
    message: string;
    handleClose: () => void;
    error?: boolean;
}

export default function AlertDialog({open, message, handleClose, error = false}:AlertDialogProps){
    return(
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <Box className ="flex flex-col place-items-center p-8">
                <DialogTitle textAlign='center' color={error ? 'error' : ''} sx={{whiteSpace: "pre-line"}}>
                    {message}
                </DialogTitle>

                <DialogActions>
                    <Button variant="contained"
                        color="primary"
                        onClick={handleClose}
                    >
                            OK
                    </Button>
                </DialogActions>
            </Box>

        </Dialog>
    );
}