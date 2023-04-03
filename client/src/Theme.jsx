import { common } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const font =  "'Poppins', sans-serif";

const { palette } = createTheme();

const purple = '#B195CE'
const yellow = '#FFDB58'

let Theme = createTheme({
	palette: {
        common : {
            black: '#111a17'
        },
		secondary: {
			main: '#494949'
		},
		primary: {
			main: common.black
		},
		error: {
			main: '#EB7644'
		},
		success: {
			main: '#94B469'
		}
	},
    typography: {
		fontFamily: font,
		body1: {
			color: palette.common.black
		  },
		h1: {
			color: palette.secondary.main
		},
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: 'contained', size: 'xlarge' },
					style: {
					  padding: '15px 35px',
					  fontWeight: 600
					},
				},
				{
					props: { variant: 'contained' },
					style: {
						color: palette.common.white,
						borderRadius: 100,
					},
				},
			],
			styleOverrides: {
				root: {
					// incase this is needed
				},
			} 
		},
		MuiTypography: {
			variants: [
				{
					props: { variant: 'body1'},
					style: {
					  color: '#616161',
					},
				}
			]
		},
	},
});

Theme = responsiveFontSizes(Theme);

export default Theme