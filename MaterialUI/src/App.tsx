import { useState } from 'react';
import  {ThemeProvider, GlobalStyles} from '@mui/material/';
import CssBaseline from "@mui/material/CssBaseline";

import Header from './components/Header/Header';
import ProductsTable from './components/Products/Table';
import {lightTheme, darkTheme} from './Styles/ThemeVariables';

import {User} from './DataSource/User';
import {Products} from './DataSource/Products';



function App() {
	const [theme, setTheme] = useState(darkTheme);

	const toggleTheme = () => {
		const newTheme = theme.palette.mode === "light" ? darkTheme : lightTheme;
		setTheme(newTheme);
	};

  	return (
		<ThemeProvider theme = {theme}>
			{/* <GlobalStyles styles ={{body: {backgroundColor: theme.palette.background.default}}}/> */}
			<CssBaseline />
			<Header user={User} theme={theme} toggleTheme={toggleTheme} />
			<ProductsTable products={Products} rowsPerPageOptions={[5,10,25]} />
		</ThemeProvider>
  	)
}

export default App