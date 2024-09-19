import { Box, Table, TableContainer, TablePagination } from '@mui/material';
import { useState } from 'react';
import AlertDialog from '../../Modals/AlertDialog';
import TableHeader, { tableHeader } from './TableHeader';
import ProductsTableBody from './ProductsTableBody';
import { bookWithGenre } from '../../../DataSource/Books/useBooksWithGenres';
import useRemoveBook from '../../../DataSource/Books/useRemoveBook';
import AddProductModal from '../../Modals/AddProductModal';
import WaitingForResults from '../../Modals/WaitingForResults';

export type SortOrder = "asc" | "desc";


function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
}

function getComparator<T, Key extends keyof T>(
        order: SortOrder,
        orderBy: Key,
    ): (
        a: T,
        b: T,
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

export interface ProductsTableProps{
    products: bookWithGenre[];
    tableHeaders: tableHeader[];
    rowsPerPageOptions: number[];
}

export default function ProductsTable({products, tableHeaders, rowsPerPageOptions}:ProductsTableProps){
    const removeProduct = useRemoveBook();
    const [orderBy, setOrderBy] = useState("");
    const [order, setOrder] = useState<SortOrder>("asc");
    const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
    const [page, setPage] = useState(0);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [message, setMessage] = useState("");
    const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
    const [productId, setProductId] = useState<string>("");

    const currencySign = "$";
    const indexOfLastItem = (page + 1) * rowsPerPage;
    const indexOfFirsItem = indexOfLastItem - rowsPerPage;

    const handleChangePage = (e: unknown, newPage: number) => {
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

    const handleItemDelete = ( deletedProduct: bookWithGenre) =>{
        setMessage(deletedProduct.title + " was removed");
        if((products.length - 1)%rowsPerPage === 0 && page!==0){
            goToPreviousPage(page);
        }
        setOpenDeleteDialog(true);
        removeProduct.mutate(deletedProduct.id);
    };

    const handleItemUpdate = (productId : string) => {
        setProductId(productId);
        setOpenUpdateModal(true);
    }

    const handleSortRequest = (id: string) => {
        const isAsc = orderBy === id && order === "asc";
        setOrder(isAsc? "desc" : "asc");
        setOrderBy(id as keyof bookWithGenre);
    }

    const sortProducts = () => {
        return stableSort<bookWithGenre>(products, getComparator(order, orderBy as keyof bookWithGenre))
    }

    return (
        <>
        <Box  justifyContent="center" alignItems="center" sx={{margin: "30px"}}>
            <TableContainer style={{ overflowX: "initial", margin: 'auto', top: '150'}} >
                <Table stickyHeader aria-label="sticky table">
                    <TableHeader
                            tableHeaders={tableHeaders}
                            orderBy={orderBy}
                            order={order}
                            handleSortRequest={handleSortRequest}
                    />
                    <ProductsTableBody
                        indexOfFirsItem={indexOfFirsItem}
                        indexOfLastItem={indexOfLastItem}
                        products={sortProducts()}
                        currencySign={currencySign}
                        handleItemDelete={handleItemDelete}
                        handleItemUpdate={handleItemUpdate}
                    />
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={rowsPerPageOptions}
                component="div"
                rowsPerPage={rowsPerPage}
                page={page}
                count={products.length}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            {removeProduct.isPending &&
                <WaitingForResults/>
            }
            {removeProduct.status === "success" &&
                <AlertDialog
                    open={openDeleteDialog}
                    message={message}
                    handleClose={handleCloseAlertDialog} />
            }
            {removeProduct.status === 'error' &&
                <AlertDialog
                    open={openDeleteDialog}
                    handleClose={handleCloseAlertDialog}
                    error={true}
                    message={"Something went wrong\nTry again"} />
            }
        </Box>
        <AddProductModal
            open={openUpdateModal}
            editMode={true}
            productId={productId}
            handleClose={() => setOpenUpdateModal(false)}/>

        </>
    );
}