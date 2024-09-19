import { Button, styled, TableBody, TableCell,TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { bookWithGenre } from '../../../DataSource/Books/useBooksWithGenres';

interface BodyProps{
    indexOfFirsItem: number;
    indexOfLastItem: number;
    products: bookWithGenre[];
    currencySign: string;
    handleItemDelete: (product: bookWithGenre) => void;
    handleItemUpdate: (productId: string) => void;
}

const CenteredTableCell = styled(TableCell) (({
    textAlign: "center",
}));


export default function ProductsTableBody({indexOfFirsItem, indexOfLastItem, products, currencySign, handleItemDelete, handleItemUpdate}: BodyProps){
    return(
        <TableBody>
            {products
            .slice(indexOfFirsItem, indexOfLastItem)
            .map((product) => (
                <TableRow
                    key={product.id}
                    sx={{ '&:nth-of-type(even)':{backgroundColor: (theme) => theme.palette.background.darker},
                     '&:last-child td, &:last-child th': { border: 0 }  }}>
                    <TableCell component="th" scope="row">
                        {product.title}
                    </TableCell>
                    <CenteredTableCell>{product.author}</CenteredTableCell>
                    <CenteredTableCell>{product.year}</CenteredTableCell>
                    <CenteredTableCell >{product.copies}</CenteredTableCell>
                    <CenteredTableCell>{product.price + " " + currencySign}</CenteredTableCell>
                    <CenteredTableCell >{product.genre? product.genre.name : ""}</CenteredTableCell>
                    <CenteredTableCell >
                        <Button onClick={() => handleItemUpdate(product.id)}>
                            <EditIcon color='warning'/>
                        </Button>
                    </CenteredTableCell>
                    <CenteredTableCell >
                        <Button onClick={() => handleItemDelete(product)}>
                            <DeleteIcon color='error'/>
                        </Button>
                    </CenteredTableCell>
                </TableRow>
            ))}
        </TableBody>
    );
}