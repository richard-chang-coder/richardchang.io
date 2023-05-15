import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const GlobalLayout = ({ children }) => {
	const location = useLocation();

	return (
		<>
			<Navbar darkMode={location.pathname === "/" ? false : true} />
			{children}
			<Footer />
		</>
	);
};

export default GlobalLayout;
