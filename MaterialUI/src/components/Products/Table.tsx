import { Box, Button, styled, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel } from '@mui/material';
import {Product} from '../../DataSource/Products';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { useState } from 'react';
import AlertDialog from '../Modals/AlertDialog';
import AddProductModal from '../Modals/AddProductModal';

const AddProductButton = styled(Button)(({
    textAlign: "center",
    "&:hover": {
        cursor: "pointer"
    }
}))

const CenteredTableCell = styled(TableCell) (({
    textAlign: "center",
}));

interface Products{
    products: Product[];
    rowsPerPageOptions: number[];
}

type SortOrder = "asc" | "desc";


function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator<Key extends keyof Product>(
    order: SortOrder,
    orderBy: Key,
  ): (
    a: Product,
    b: Product,
  ) => number {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

const tableHeaders = [
    {id: "name", label: "Product Name"},
    {id: "type", label: "Type"},
    {id: "price", label: "Price"},
    {id: "availability", label: "Availability"},
    {id: "available_items", label: "Available items"},
];

export default function ProductsTable({products, rowsPerPageOptions}:Products){
    const [currentProducts, setCurrentProducts] = useState<Product[]>(products);

    const [orderBy, setOrderBy] = useState("");
    const [order, setOrder] = useState<SortOrder>("asc");

    const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
    const [page, setPage] = useState(0);

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openAddProductForm, setAddProductForm] = useState(false);
    const [message, setMessage] = useState("");

    const currencySign = "$";

    const indexOfLastItem = (page + 1) * rowsPerPage;
    const indexOfFirsItem = indexOfLastItem - rowsPerPage;

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const handleCloseAlertDialog = () => {
        setOpenDeleteDialog(false);
    };

    const goToPreviousPage = (pageNumber: number) => {
        setPage(pageNumber-1);
    }

    const handleItemDelete = ( deletedProduct: Product) =>{
        setMessage(deletedProduct.name + " was removed");
        if((currentProducts.length - 1)%rowsPerPage === 0){
            goToPreviousPage(page);
        }
        setOpenDeleteDialog(true);
        setCurrentProducts(currentProducts.filter((product) => (product.id !== deletedProduct.id)));
    };

    const handleAddFormOpen = () => {
        setAddProductForm(true);
    }

    const handleAddFormClose = () => {
        setAddProductForm(false);
    }

    const handleAddProduct = (product : Product) => {
        setCurrentProducts([...currentProducts, product]);
    }

    const handleSortRequest = (id: String) => {
        const isAsc = orderBy === id && order === "asc";
        setOrder(isAsc? "desc" : "asc");
        setOrderBy(id as keyof Product);

        // console.log();
    }
    return (
        <>
        <Box  justifyContent="center" alignItems="center">
            <TableContainer style={{ overflowX: "initial", margin: 'auto', top: '150'}} sx={{width: '75%' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow >
                            {tableHeaders.map((header) => (
                                <TableCell
                                key={header.id}
                                style={{ top: 100 }}
                                align='center'
                                sortDirection={orderBy === header.id ? order : false}>
                                    <TableSortLabel
                                    active={orderBy === header.id}
                                    direction={orderBy === header.id? order : 'asc'}
                                    onClick={() => {handleSortRequest(header.id)}}
                                    >
                                        {header.label}
                                    </TableSortLabel>

                                </TableCell>
                            ))}
                            <TableCell style={{ top: 100}}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {stableSort<Product>(currentProducts, getComparator(order, orderBy as keyof Product)).slice(indexOfFirsItem, indexOfLastItem)
                        .map((product) => (
                            <TableRow
                            key={product.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {product.name}
                                </TableCell>
                                <CenteredTableCell>{product.type}</CenteredTableCell>
                                <CenteredTableCell>{product.price + " " + currencySign}</CenteredTableCell>
                                <CenteredTableCell>
                                    {product.availability?
                                        <CheckRoundedIcon color='success'/>:
                                        <ClearRoundedIcon color='error'/>}
                                </CenteredTableCell>
                                <CenteredTableCell >{product.available_items}</CenteredTableCell>
                                <CenteredTableCell >
                                    <Button onClick={() => handleItemDelete(product)}>
                                        <DeleteIcon color='warning'/>
                                    </Button>
                                </CenteredTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={rowsPerPageOptions}
                component="div"
                rowsPerPage={rowsPerPage}
                page={page}
                count={currentProducts.length}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <AlertDialog open={openDeleteDialog} message={message} handleClose={handleCloseAlertDialog} />
        </Box>
        <Box
            display="flex"
            alignItems="right"
            justifyContent="right"
            marginRight={"15rem"}>
            <AddProductButton variant='contained' onClick={handleAddFormOpen}>Add Product</AddProductButton>
            <AddProductModal open={openAddProductForm} handleClose={handleAddFormClose} addProduct={handleAddProduct}/>
        </Box>
        </>
    );
}