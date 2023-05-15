import React from "react";

import Grid from "@mui/material/Grid";
import Card from "./Card";

import MockJson from "./portfolioList.json";

const portfolioList = MockJson;

const CardList = (props) => {
	return (
		<>
			<Grid
				container
				spacing={4}
				sx={{
					display: "-webkit-box"
				}}
			>
				{portfolioList.map((portfolio, idx) => {
					return (
						<Grid item xs={12} sm={6} key={idx}>
							<Card {...portfolio} />
						</Grid>
					);
				})}
			</Grid>
		</>
	);
};

export default CardList;
