import { useState } from 'react';
import  {ThemeProvider} from '@mui/material/';
import CssBaseline from "@mui/material/CssBaseline";
import PageHeader from './components/PageHeader/PageHeader';
import Products from './components/Products/Products';
import {lightTheme, darkTheme} from './Styles/ThemeVariables';

import LoadingScreen from './components/LoadingScreen';
import useBooksWithGenres from './DataSource/Books/useBooksWithGenres';

const tableHeaders = [
    {id: "title", label: "Title"},
    {id: "author", label: "Author"},
    {id: "year", label: "Year of release"},
    {id: "copies", label: "Available copies"},
    {id: "price", label: "Price"},
    {id: "genre", label: "Genre"},
];

function App() {
	const [theme, setTheme] = useState(darkTheme);

	const toggleTheme = () => {
		const newTheme = theme.palette.mode === "light" ? darkTheme : lightTheme;
		setTheme(newTheme);
	};

	const booksWithGenres = useBooksWithGenres();
	const rowsPerPage = [5,10,25];

	return (
		<ThemeProvider theme = {theme}>
			<CssBaseline />
			<PageHeader theme={theme} toggleTheme={toggleTheme} />
			{booksWithGenres.isLoading ?
				<>
				<LoadingScreen/>
				<Products
					products={[]}
					tableHeaders={tableHeaders}
					rowsPerPageOptions={rowsPerPage}
					/>
				</>
				:
				<Products
					products={booksWithGenres.data}
					tableHeaders={tableHeaders}
					rowsPerPageOptions={rowsPerPage}
					/>
			}
		</ThemeProvider>
	)
}

export default App