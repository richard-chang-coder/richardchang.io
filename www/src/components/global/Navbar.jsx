import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import { motion } from "framer-motion";

import { styled } from "@mui/system";

const NavbarContainer = styled(AppBar, {
	shouldForwardProp: (prop) => prop !== "isScrolled" && prop !== "darkMode"
})(({ theme, isScrolled, darkMode }) => ({
	backgroundColor: isScrolled ? "rgb(255 255 255 / 0.3)" : "transparent",
	backdropFilter: "blur(10px)",
	color: isScrolled
		? theme.palette.common.purple
		: darkMode
		? theme.palette.common.purple
		: theme.palette.common.white,
	boxShadow: "none",
	paddingBlock: isScrolled ? "inherit" : "20px 20px",
	transition: "all 0.3s ease-in-out"
}));

const pages = ["Work", "About", "Contact"];

const Navbar = ({ darkMode }) => {
	const [isScrolled, setIsScrolled] = useState(false);

	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 100);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<NavbarContainer
			position="fixed"
			component={motion.div}
			isScrolled={isScrolled}
			darkMode={darkMode}
		>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="body1"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							minWidth: 130,
							display: { xs: "none", md: "flex" },
							fontWeight: 900,
							letterSpacing: ".2rem",
							color: "inherit",
							textDecoration: "none"
						}}
					>
						Richard.
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "flex", md: "none" }
						}}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-navBar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-navBar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left"
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left"
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" }
							}}
						>
							{pages.map((page) => (
								<MenuItem
									key={page}
									onClick={handleCloseNavMenu}
								>
									<Typography textAlign="center">
										{page}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontWeight: 700,
							letterSpacing: ".2rem",
							color: "inherit",
							textDecoration: "none"
						}}
					>
						Richard.
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: {
								xs: "none",
								md: "flex",
								justifyContent: "center"
							}
						}}
					>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{
									my: 2,
									color: "inherit",
									display: "block"
								}}
							>
								{page}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Box
							sx={{
								minWidth: { md: 130 },
								textAlign: "right",
								display: "flex",
								justifyContent: "end"
							}}
						>
							<Typography
								variant="body2"
								noWrap
								component="a"
								href="/"
								sx={{
									display: { xs: "none", md: "flex" },
									fontWeight: 600,
									letterSpacing: ".2rem",
									color: "inherit",
									textDecoration: "none"
								}}
							>
								CONTACT
							</Typography>
						</Box>
					</Box>
				</Toolbar>
			</Container>
		</NavbarContainer>
	);
};

export default Navbar;
