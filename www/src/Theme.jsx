import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const font = "'Poppins', sans-serif";

const { palette } = createTheme();

const purple = "#5928e5";
const blushPink = "#f5e3e1";

let Theme = createTheme({
	palette: {
		common: {
			black: "#111a17",
			purple: purple
		},
		secondary: {
			main: blushPink
		},
		primary: {
			main: purple
		},
		error: {
			main: "#EB7644"
		},
		success: {
			main: "#94B469"
		}
	},
	typography: {
		fontFamily: font,
		body1: {
			color: palette.common.black
		},
		h1: {
			color: palette.secondary.main
		}
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: "contained", size: "xlarge" },
					style: {
						padding: "15px 35px",
						fontWeight: 600,
						fontSize: 21
					}
				},
				{
					props: { variant: "contained" },
					style: {
						color: palette.common.white,
						borderRadius: 100
					}
				},
				{
					props: { color: "secondary" },
					style: {
						color: purple,
						borderRadius: 100
					}
				}
			],
			styleOverrides: {
				root: {
					// incase this is needed
				}
			}
		},
		MuiTypography: {
			variants: [
				{
					props: { variant: "body1" },
					style: {
						color: "#616161"
					}
				}
			]
		}
	}
});

Theme = responsiveFontSizes(Theme);

export default Theme;
