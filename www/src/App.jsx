import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import "./App.css";

import Theme from "./Theme";
import { GlobalLayout } from "./components/global";
import ScrollToTop from "./utils/ScrollToTop";

import AnimatedRoutes from "./components/global/AnimatedRoutes";

const App = () => {
	return (
		<ThemeProvider theme={Theme}>
			<CssBaseline />
			<Router>
				<GlobalLayout>
					<ScrollToTop />
					<AnimatedRoutes />
				</GlobalLayout>
			</Router>
		</ThemeProvider>
	);
};

export default App;
