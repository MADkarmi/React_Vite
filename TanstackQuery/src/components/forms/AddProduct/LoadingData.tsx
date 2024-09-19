import { Box } from "@mui/material";
import LoadingScreen from "../../LoadingScreen";
import FormButtons from "./AddProductFromComponents/FormButtons";

interface LoadingDataProps{
    handleClose: () => void;
}

export default function LoadingData({handleClose}:LoadingDataProps){
    return(
        <Box>
            <Box className="p-40">
                <LoadingScreen/>
            </Box>
            <FormButtons
                isLoading={true}
                handleClose={handleClose} />
        </Box>
    )
}