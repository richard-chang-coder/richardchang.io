import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";

import { styled } from "@mui/system";

const FooterContainer = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.common.purple,
	background: "radial-gradient(at center bottom, #8061D7, #5928E5)",
	padding: 20
}));

const FooterNavbar = styled(Stack)({
	color: "white"
});

const FooterNavbarContainer = styled(Box)({});

const FooterNavbarLabel = styled(Typography)(({ theme }) => ({
	fontWeight: 700,
	color: `rgba(255,255,255, 0.5)`,
	fontSize: "1.125rem",
	marginBottom: 12
}));

const FooterNavbarItems = styled(Box)(({ theme }) => ({
	a: {
		color: theme.palette.common.white,
		textDecoration: "none",
		"&:hover": {
			color: theme.palette.primary.main
		}
	}
}));

function Footer() {
	return (
		<FooterContainer>
			<Container>
				<Box maxWidth={800} sx={{ margin: "auto", my: 10 }}>
					<Grid container spacing={2}>
						<Grid
							item
							xs={12}
							md={3}
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center"
							}}
						>
							<Avatar sx={{ width: "11vw", height: "11vw" }} />
						</Grid>
						<Grid item xs={12} md={9}>
							<Typography
								variant="h3"
								sx={{ fontWeight: 600, color: "white" }}
							>
								That’s me in a nutshell, so where do you want to
								start?
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Divider
					textAlign="right"
					light={true}
					sx={{
						mb: 8,
						"&::before, &::after": {
							borderTopColor: "white"
						}
					}}
				>
					<Button variant="contained" size="xlarge" color="secondary">
						Let's Chat
					</Button>
				</Divider>
				<FooterNavbar
					direction="row"
					spacing={2}
					justifyContent="space-between"
				>
					<FooterNavbarContainer>
						<FooterNavbarLabel variant="body">
							Social
						</FooterNavbarLabel>
						<Stack direction="row" spacing={1}>
							<FooterNavbarItems>
								<Link
									href="https://www.instagram.com/inkadoodle.studio"
									target="_blank"
								>
									Instagram
								</Link>
							</FooterNavbarItems>
							<FooterNavbarItems>
								<Link
									href="https://github.com/richard-chang-coder"
									target="_blank"
								>
									GIT
								</Link>
							</FooterNavbarItems>
							<FooterNavbarItems>
								<Link
									href="https://www.linkedin.com/in/richardfchang/"
									target="_blank"
								>
									LinkedIn
								</Link>
							</FooterNavbarItems>
						</Stack>
					</FooterNavbarContainer>
					<FooterNavbarContainer>
						<FooterNavbarLabel>Contact</FooterNavbarLabel>
						<Box>
							<FooterNavbarItems>
								<Link
									href="mailto:hello@richardchang.io"
									target="_blank"
								>
									hello@richardchang.io
								</Link>
							</FooterNavbarItems>
						</Box>
					</FooterNavbarContainer>
				</FooterNavbar>
			</Container>
		</FooterContainer>
	);
}

export default Footer;
