import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { SectionHeading } from "../global";

const AboutMe = () => {
	return (
		<Container sx={{ paddingTop: 24 }}>
			<Grid container spacing={2} mb={5}>
				<Grid item xs={12}>
					<SectionHeading
						title="About me"
						description="As a creative Front-End Developer serving local businesses in Markham, Ontario, I specialize in delivering visually stunning and interactive websites. With a passion for innovation and a keen focus on user experience, I'm dedicated to bringing your ideas to life and creating an online presence that sets your business apart."
					/>
				</Grid>
			</Grid>
			<Typography component="h3" variant="h5" mb={3}>
				Company I've worked with
			</Typography>
			<Grid
				container
				spacing={5}
				sx={{
					mb: 6,
					img: { width: "100%", opacity: "60%" }
				}}
			>
				<Grid item xs={2}>
					<img
						src={process.env.PUBLIC_URL + "/logo-viva.png"}
						alt="Viva Naturals"
					/>
				</Grid>
				<Grid item xs={2}>
					<img
						src={process.env.PUBLIC_URL + "/logo-scotiabank.png"}
						alt="Scotiabank"
					/>
				</Grid>
				<Grid item xs={2}>
					<img
						src={process.env.PUBLIC_URL + "/logo-dynamic-funds.png"}
						alt="Dynamic Funds"
					/>
				</Grid>
				<Grid item xs={2}>
					<img
						style={{ width: "74%" }}
						src={process.env.PUBLIC_URL + "/logo-procom.png"}
						alt="Procom"
					/>
				</Grid>
			</Grid>
			<Button variant="contained" size="xlarge">
				Learn more >{" "}
			</Button>
		</Container>
	);
};

export default AboutMe;
