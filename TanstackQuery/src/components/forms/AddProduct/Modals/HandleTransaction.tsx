import TransactionFailed from "./TransactionFailed";
import WaitingForResults from "../../../Modals/WaitingForResults";

interface HandleTransactionProps{
    status: string;
    handleClose: () => void;
}

export default function HandleTransaction({status, handleClose}:HandleTransactionProps){
    return(
        <>
            {status === "pending" &&  <WaitingForResults/>}

            {status === "success" && setTimeout(() => handleClose(), 0)}
            
            {/* timeout bo sypał errorem zmiany stanu na komponencie który się renderuje
                redirect opendialog usestate varriable (z parenta - Controls albo ProductsTable) do kolejki callbaków
                Cannot update a component while rendering a different component...
             */}

            {status === "error" && <TransactionFailed/> }
        </>
    );
}