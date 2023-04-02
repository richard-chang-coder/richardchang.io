import React from 'react'

import './App.css';

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from '@mui/material/styles';

import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";


import HomePage from './pages/Home';
import OldWebsite from './pages/OldWebsite'

import Theme from './Theme';

function App() {
	const location = useLocation();
	return (
		<ThemeProvider theme={Theme}>
			<CssBaseline />
				<AnimatePresence>
					<Routes location={location} key={location.pathname}>
						<Route exact path="/" element={<HomePage/>}/>
						<Route exact path="*" element={<HomePage/>}/>
						<Route exact path="/old" element={<OldWebsite/>}/>
					</Routes>
				</AnimatePresence>
		</ThemeProvider>
	);
}

export default App;
