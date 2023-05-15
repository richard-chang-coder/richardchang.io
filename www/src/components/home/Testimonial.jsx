import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { SectionHeading } from "../global";

const Testimonial = () => {
	return (
		<Container sx={{ paddingTop: 24 }}>
			<Grid container spacing={2} mb={5}>
				<SectionHeading
					title="Testimonial"
					description="Experience the Difference: Our Top-Notch Web Services"
					alignment="center"
				/>
			</Grid>
		</Container>
	);
};

export default Testimonial;
