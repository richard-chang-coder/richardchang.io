import React from "react";
import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import { SectionHeading } from "../global";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import CheckIcon from "@mui/icons-material/Check";

import { styled } from "@mui/system";
const ServicesList = styled(List)(({ theme }) => ({
	li: {
		paddingLeft: 0
	},
	".MuiAvatar-root": {
		backgroundColor: theme.palette.common.purple
	},
	".MuiTypography-body1": {
		fontWeight: 600
	}
}));

const Services = () => {
	return (
		<Container sx={{ paddingTop: 24 }}>
			<Grid container spacing={5} mb={5}>
				<Grid item xs={12} md={6}>
					<Skeleton variant="rectangular" sx={{ height: "100%" }} />
				</Grid>
				<Grid item xs={12} md={6}>
					<SectionHeading
						title="Services"
						description="Experience the Difference: Our Top-Notch Web Services"
					/>
					<ServicesList>
						<ListItem>
							<ListItemAvatar>
								<Avatar>
									<CheckIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								sx={{ fontWeight: 700 }}
								primary="Custom Web App"
								secondary={
									"Tailored solutions for your unique needs."
								}
							/>
						</ListItem>
						<ListItem>
							<ListItemAvatar>
								<Avatar>
									<CheckIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary="Custom Web App"
								secondary={
									"Tailored solutions for your unique needs."
								}
							/>
						</ListItem>
						<ListItem sx={{ pl: 0 }}>
							<ListItemAvatar>
								<Avatar>
									<CheckIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary="Integration with popular CMS platforms"
								secondary={
									"Powerful e-commerce solutions on your favorite platforms - Shopify, WordPress, Wix, and Webflow."
								}
							/>
						</ListItem>
						<ListItem sx={{ pl: 0 }}>
							<ListItemAvatar>
								<Avatar>
									<CheckIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary="Website optimization"
								secondary={
									"Powerful e-commerce solutions on your favorite platforms - Shopify, WordPress, Wix, and Webflow."
								}
							/>
						</ListItem>
					</ServicesList>
					{/* <Button variant="contained" size="xlarge">
						Learn more >{" "}
					</Button> */}
				</Grid>
			</Grid>
		</Container>
	);
};

export default Services;
