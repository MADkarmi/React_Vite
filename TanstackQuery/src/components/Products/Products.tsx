import Controls from './Controls';
import ProductsTable, { ProductsTableProps } from './TableContent/ProductsTable';

interface Products extends ProductsTableProps{
}

export default function Products({products, rowsPerPageOptions, tableHeaders}:Products){
    return (
        <>
        <ProductsTable
            products={products}
            tableHeaders={tableHeaders}
            rowsPerPageOptions={rowsPerPageOptions}
        />
        <Controls/>
        </>
    );
}