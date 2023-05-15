import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/system";

import { useScroll, useTransform, motion } from "framer-motion";

const HeroContainer = styled(Box)(({ theme }) => ({
	color: theme.palette.common.white,
	backgroundColor: theme.palette.common.purple,
	background:
		"radial-gradient(circle, rgba(128,97,215,1) 0%, rgba(89,40,229,1) 100%)"
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
	color: "inherit",
	fontSize: "calc(10vw + 0.5vh + 2vmin)",
	transition: "all 2s cubic-bezier(0.165,0.84,0.44,1)",
	whiteSpace: "nowrap",
	lineHeight: "0.7",
	textTransform: "uppercase",
	fontWeight: 700,
	opacity: 0.8
}));

const HeroDescription = styled(Typography)(({ theme }) => ({
	color: "inherit",
	fontSize: "calc(1vw + 2vh)",
	fontWeight: 500,
	marginTop: 16
}));

const HeroImage = styled(Box)(({ theme }) => ({
	width: "calc(38vw + 3vh + 20vmin)",
	display: "flex",
	alignItems: "end",
	height: "100%",
	img: {
		width: "100%"
	}
}));

const Hero = () => {
	const { scrollYProgress } = useScroll();
	const motionHeroTitle = useTransform(scrollYProgress, [0, 1], [0, -600]);
	return (
		<HeroContainer
			sx={{
				height: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			}}
		>
			<Box
				sx={{
					position: "absolute",
					textAlign: "center",
					marginTop: "15vh",
					width: "100%",
					overflow: "hidden"
				}}
			>
				<HeroTitle style={{ x: motionHeroTitle }} component={motion.h1}>
					Richard Chang - Richard Chang
				</HeroTitle>

				<HeroDescription>
					Partnering with a local web designer to bring your vision to
					life.
				</HeroDescription>
			</Box>
			{/* <HeroImage>
				<img
					src={process.env.PUBLIC_URL + "/richard.png"}
					alt="richard"
				/>
			</HeroImage> */}
		</HeroContainer>
	);
};

export default Hero;
