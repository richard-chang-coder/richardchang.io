import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { CardList } from "../components/portfolio";
import { SectionHeading } from "../components/global";
import { Hero } from "../components/home";
import { Typography } from "@mui/material";
import { PageTransition } from "../utils/motion";
import Services from "../components/home/Services";
import AboutMe from "../components/home/AboutMe";
import Testimonial from "../components/home/Testimonial";

const HomePage = () => {
	return (
		<>
			<PageTransition>
				<Box sx={{ pb: 24 }}>
					<Hero />
					<Services />
					{/* <AboutMe /> */}
					<Testimonial />
					<Container sx={{ paddingTop: 24 }}>
						<Box sx={{ mb: 8 }}>
							<SectionHeading
								title="Selected Projects"
								description="Think. Make. Solve"
							/>
						</Box>
						<CardList />
					</Container>
				</Box>
			</PageTransition>
		</>
	);
};

export default HomePage;
