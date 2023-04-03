import React from 'react';

import { BrowserRouter as Router } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from '@mui/material/styles';

import './App.css'

import Theme from './Theme';
import { GlobalLayout } from './components/global';
import ScrollToTop from './hooks/ScrollToTop';


import AnimatedRoutes from './components/global/AnimatedRoutes';

const App = () => {
	return (
		<ThemeProvider theme={Theme}>
			<CssBaseline />
				<GlobalLayout>
					<Router>
						<ScrollToTop/>
						<AnimatedRoutes/>
					</Router>
				</GlobalLayout>
		</ThemeProvider> 
  );
}

export default App;
