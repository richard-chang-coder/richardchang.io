import React, { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { SectionHeading } from "../components/global";

import { styled, alpha } from "@mui/system";
import { useLocation } from "react-router-dom";
import { PageTransition } from "../utils/motion";

const PortfolioHeader = styled(Box)(({ theme }) => ({
	paddingTop: "20vh",
	paddingBottom: "20vh"
}));

const PortfolioTitle = styled(Typography)(({ theme }) => ({
	fontWeight: 700,
	lineHeight: 0.8,
	marginBottom: 16
}));

const PortfolioDetail = styled(Grid)(({ theme }) => ({
	h5: {
		fontWeight: 600,
		marginBottom: 0,
		textTransform: "uppercase",
		color: alpha(theme.palette.common.black, 0.3)
	},
	ul: {
		marginTop: 0,
		paddingLeft: 0,
		listStyle: "none"
	}
}));

const PortfolioHeroImage = styled(Container)(({ theme }) => ({
	padding: "0 !important",
	marginBottom: 40,
	img: {
		width: "100%"
	}
}));

const PortfolioImages = styled(Container)(({ theme }) => ({
	marginTop: 40,
	img: {
		width: "100%"
	}
}));

const PortfolioTools = styled(Container)(({ theme }) => ({
	paddingTop: 80,
	paddingBottom: 80,
	display: "flex",
	flexDirection: "column",
	alignItems: "center"
}));

const Tool = styled(Container)(({ theme }) => ({
	textAlign: "center"
}));

const PortfolioPage = (props) => {
	const [portfolio, setPortfolio] = useState({});
	const { state } = useLocation();

	useEffect(() => {
		if (!state) {
			console.log("fetch data");
		} else {
			setPortfolio(state);
		}
	}, [setPortfolio, state]);

	return (
		<PageTransition>
			<PortfolioHeader>
				<Grid container spacing={12}>
					<Grid item xs={12} sm={8}>
						<PortfolioTitle
							variant="h2"
							component="h1"
							sx={{ textTransform: "uppercase" }}
						>
							{portfolio.title}
						</PortfolioTitle>
						<Typography variant="body1" sx={{ mb: 3 }}>
							{portfolio.description}
						</Typography>
						<Button
							variant="contained"
							size="xlarge"
							onClick={() =>
								window.open(`${portfolio.url}`, "_blank")
							}
						>
							View Project
						</Button>
					</Grid>
					<PortfolioDetail item xs={12} sm={4}>
						<Grid item xs={12} sm={6}>
							<Typography variant="body1" as="h5">
								Client
							</Typography>
							<ul>
								<li>Myself</li>
							</ul>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Typography variant="body1" as="h5">
								My Role
							</Typography>
							<ul>
								<li>UX</li>
							</ul>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Typography variant="body1" as="h5">
								Year
							</Typography>
							<ul>
								<li>2018</li>
							</ul>
						</Grid>
					</PortfolioDetail>
				</Grid>
			</PortfolioHeader>
			<PortfolioHeroImage maxWidth={false}>
				{/* <img src="https://via.placeholder.com/1500/09f/fff.png " alt="test"/> */}
				<img
					src={process.env.PUBLIC_URL + "/mock-up.jpg"}
					alt="Dynamic Funds"
				/>
			</PortfolioHeroImage>

			<PortfolioTools>
				<SectionHeading description="Stack" />
				<Stack spacing={2} direction="row">
					<Tool>React</Tool>
					<Tool>Something Else</Tool>
					<Tool>Figma</Tool>
				</Stack>
			</PortfolioTools>

			<PortfolioImages maxWidth="lg">
				<img
					src="https://via.placeholder.com/1500/09f/fff.png "
					alt="test"
				/>
			</PortfolioImages>
		</PageTransition>
	);
};

export default PortfolioPage;
