import { TableCell,  TableHead,  TableRow, TableSortLabel } from '@mui/material';
import { SortOrder } from './ProductsTable';

interface TableHeaderProps{
    tableHeaders : tableHeader[],
    orderBy: string|boolean,
    order: SortOrder,
    handleSortRequest: (id:string) => void,
}

export type tableHeader = {
    id: string;
    label: string;
}

export default function TableHeader({tableHeaders, orderBy, order, handleSortRequest}:TableHeaderProps){
    return(
        <TableHead>
            <TableRow>
                {tableHeaders.map((header) => (
                    <TableCell
                    key={header.id}
                    style={{ top: 100 }}
                    sx={{ backgroundColor: (theme) => theme.palette.tableHeader.light}}
                    align='center'
                    sortDirection={orderBy === header.id ? order : false}>
                        <TableSortLabel
                        active={orderBy === header.id}
                        direction={orderBy === header.id? order : 'desc'}
                        onClick={() => {handleSortRequest(header.id)}}
                        >
                            {header.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
                <TableCell sx={{ backgroundColor: (theme) => theme.palette.tableHeader.light}} align='center' style={{ top: 100}}>Edit</TableCell>
                <TableCell sx={{ backgroundColor: (theme) => theme.palette.tableHeader.light}} align='center' style={{ top: 100}}>Delete</TableCell>
            </TableRow>
        </TableHead>
    );
}