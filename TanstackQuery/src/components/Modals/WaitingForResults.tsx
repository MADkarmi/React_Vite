import { Box, Dialog } from "@mui/material";
import LoadingScreen from "../LoadingScreen";

export default function WaitingForResults(){
    return (
        <Dialog open={true}>
            <Box className="p-40">
                <LoadingScreen/>
            </Box>
        </Dialog>
    );
}