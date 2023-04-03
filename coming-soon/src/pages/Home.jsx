import React from "react";
import {
	Box,
	Typography,
	Button,
	Link,
	IconButton,
	Stack,
	Avatar
} from "@mui/material";

import { styled } from "@mui/system";

const SocialButton = styled(IconButton)({
	backgroundColor: "white",
	opacity: 0.5,
	transition: "all 0.3s ease-in-out",
	boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
	":hover": {
		opacity: 1,
		backgroundColor: "white",
		boxShadow:
			"rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
	},
	".MuiAvatar-root": {
		width: "15px",
		height: "15px"
	}
});

const HomePage = () => {
	return (
		<Box>
			<Box
				sx={{
					backgroundColor: "gray",
					height: "96vh",
					padding: "0 40px",
					margin: 2,
					borderRadius: 3,
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					flexDirection: "column",
					background:
						"linear-gradient(to left bottom, #e5c1df, #e5cce8, #e6d7f0, #e9e2f6, #eeecfb, #edeefc, #edeffc, #edf1fc, #e4ebf9, #dbe5f7, #d1dff4, #c7d9f1)",
					backgroundSize: "400% 400%",
					animation: "gradient 15s ease infinite",
					"@keyframes gradient": {
						"0%": {
							backgroundPosition: "0% 50%"
						},
						"50%": {
							backgroundPosition: "100% 50%"
						},
						"100%": {
							backgroundPosition: "0% 50%"
						}
					}
				}}
			>
				<Box
					sx={{
						backgroundColor: "white",
						padding: "10px 50px",
						fontWeight: 800,
						letterSpacing: 0.9,
						borderBottomLeftRadius: 20,
						borderBottomRightRadius: 20
					}}
				>
					Richard.
				</Box>
				<Box sx={{ textAlign: "center" }}>
					<Typography
						variant="body1"
						sx={{ fontWeight: 600, textTransform: "uppercase" }}
					>
						I'm Still
					</Typography>
					<Typography variant="h1" mb={2}>
						Cooking My Website
					</Typography>
					<Typography
						variant="body1"
						mb={4}
						sx={{ color: "#727272" }}
					>
						I'm currently working hard on building my portfolio that
						speaks the new me. <br />
						In the meantime checkout my old portfolio or{" "}
						<Link href="mailto:hello@richardchang.io">
							contact me
						</Link>
						.
					</Typography>
					<Button
						variant="contained"
						size="xlarge"
						target="_blank"
						href="https://old.richardchang.io/"
					>
						Visit Old Site
					</Button>
				</Box>
				<Box>
					<Stack direction="row" spacing={1} padding={2}>
						<SocialButton
							target="_blank"
							href="https://www.linkedin.com/in/richardfchang/"
						>
							<Avatar
								src={
									process.env.PUBLIC_URL + "/icon-linkedn.svg"
								}
							/>
						</SocialButton>
						<SocialButton
							target="_blank"
							href="http://inkadoodle.studio/"
						>
							<Avatar
								src={process.env.PUBLIC_URL + "/icon-etsy.svg"}
							/>
						</SocialButton>
					</Stack>
				</Box>
			</Box>
		</Box>
	);
};

export default HomePage;
