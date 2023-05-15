import React from "react";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { styled, alpha, keyframes } from "@mui/system";

import { motion } from "framer-motion";

// https://www.youtube.com/watch?v=3QrkCmsfewM&t=195s&ab_channel=WrongAkram

const MoveUpDown = keyframes`
 	from {
    	transform: translateY(10px);
  	}
  	to {
		transform: translateY(0);
	}
`;

const CardContainer = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.common.black,
	borderRadius: 10,
	color: theme.palette.common.white,
	position: "relative",
	overflow: "hidden",
	cursor: "pointer",
	WebkitBoxFlex: 1,
	MozBoxFlex: 1,
	WebkitFlex: 1,
	msFlex: 1,
	flex: 1,

	":hover": {
		boxShadow: theme.shadows[20],
		"& .card-overlay": {
			backgroundColor: alpha(theme.palette.common.black, 0.6)
		},
		"& .card-button": {
			color: alpha(theme.palette.common.white, 0.8),
			animation: `${MoveUpDown} 0.45s forwards ease-in-out`
		}
	}
}));

const CardHeading = styled(Box)(({ theme }) => ({
	width: "80%",
	padding: 40,
	zIndex: 2,
	position: "relative"
}));

const CardSubtitle = styled(Typography)(({ theme }) => ({
	color: alpha(theme.palette.common.white, 0.6),
	fontWeight: 500,
	marginBottom: 8
}));

const CardTitle = styled(Typography)(({ theme }) => ({
	fontWeight: 600,
	marginBottom: 8
}));

const CardLink = styled(Typography)(({ theme }) => ({
	color: alpha(theme.palette.common.white, 0),
	transition: "0.45s color ease-in"
}));

const CardImage = styled(Box)(({ theme }) => ({
	height: 400,
	zIndex: "0",
	display: "flex",
	alignItems: "end",
	img: {
		width: "100%",
		top: "-50px",
		left: "-35px",
		display: "block",
		cursor: "pointer",
		transition: "0.45s all ease-in"
	}
}));

const CardOverlay = styled(Box)(({ theme }) => ({
	backgroundColor: alpha(theme.palette.common.black, 0),
	position: "absolute",
	width: "100%",
	height: "100%",
	top: 0,
	zIndex: 1,
	transition: "0.45s background-color ease-in"
}));

const imageMotion = {
	rest: {},
	hover: {
		scale: 1.02,
		transition: {
			duration: 0.3,
			ease: [0.43, 0.13, 0.23, 0.96]
		}
	}
};

const textMotion = {
	exit: {
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: [0.43, 0.13, 0.23, 0.96]
		}
	}
};

const Card = (portfolio) => {
	const navigate = useNavigate();

	return (
		<CardContainer
			elevation={0}
			sx={{
				bgcolor: portfolio.thumbnail.background_color,
				height: "100%"
			}}
			onClick={() =>
				navigate(`/portfolio/${portfolio._id}`, { state: portfolio })
			}
			component={motion.div}
			initial="rest"
			whileHover="hover"
			animate="rest"
			exit="exit"
		>
			<CardHeading component={motion.div} variants={textMotion}>
				<CardSubtitle>
					{portfolio.start_date}
					{portfolio.end_date !== null ? "-" : null}
					{portfolio.end_date}
				</CardSubtitle>
				<CardTitle variant="h4">{portfolio.thumbnail.title}</CardTitle>
				<CardLink variant="subtitle2" className="card-button">
					View Case Study >
				</CardLink>
			</CardHeading>
			<CardOverlay className="card-overlay" />
			<CardImage>
				{/* <img src={portfolio.thumbnail.image} alt={portfolio.thumbnail.title}/> */}
				<motion.img
					variants={imageMotion}
					src={process.env.PUBLIC_URL + "/mock-up.jpg"}
					alt="Dynamic Funds"
				/>
			</CardImage>
		</CardContainer>
	);
};

Card.propTypes = {
	portfolio: PropTypes.object
};

export default Card;
