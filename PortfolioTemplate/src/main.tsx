import React from 'react'
import ReactDOM from 'react-dom/client'
import Projects from './routes/Projects/Projects.tsx'
import AboutMe from './routes/AboutMe/AboutMe'
import Home from './routes/Home/Home'
import {
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import RootLayout from './layout/RootLayout'


import './index.css'
import ThemeProvider from './providers/ThemeProvider.tsx'


const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout/>,
		children : [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/aboutMe",
				element: <AboutMe />,
			},
			{
				path: "/projects",
				element: <Projects />,
			},

		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>,
)
