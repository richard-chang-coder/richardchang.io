import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const font =  "'Poppins', sans-serif";

const { palette } = createTheme();


let Theme = createTheme({
	palette: {
        common : {
            black: '#111a17'
        },
		secondary: {
			main: '#494949'
		},
		primary: {
			main: '#2d2f4a'
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
			fontWeight: 700,
            color: '#2d2f4a'
		},
	},
	components: {
        MuiLink: {
            styleOverrides: {
				root: {
					fontWeight: 600,
                    textDecoration: 'none',
                 
				},
			} 
        },
		MuiButton: {
			variants: [
				{
					props: { variant: 'contained', size: 'xlarge' },
					style: {
					  padding: '15px 35px',
					  fontWeight: 600,
                      letterSpacing: '0.1rem',
                      
					},
				},
				{
					props: { variant: 'contained' },
					style: {
						color: palette.common.white,
						borderRadius: 100,
                        textTransform: 'initial',
                        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 18px 50px -10px',
                        backgroundColor:'#2d2f4a',
					},
				},
			],
	
		},
	},
});

Theme = responsiveFontSizes(Theme);

export default Theme