import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


import { CardList } from '../components/portfolio'
import { SectionHeading } from '../components/global'
import { Hero } from '../components/home';
import { Typography } from '@mui/material';
import { PageTransition } from '../hooks/motion';


const HomePage = () => {
    return (
           <>
            <PageTransition>
                    <Box sx={{pb: 24}}>
                        <Hero/>
                        <Container sx={{paddingTop: 24}}>
                            <Grid container spacing={2} mb={5}>
                                <Grid item xs={12}>
                                    <SectionHeading 
                                        title="My 411"
                                        description="A creative Front-End Developer delivering visually stunning and interactive websites. Bringing ideas to life with a passion for innovation and user experience."
                                    />
                                </Grid>
                            </Grid>
                            <Typography component="h3" variant="h5" mb={3}>Company I've worked with</Typography>
                            <Grid container spacing={5} sx={{mb: 6, 'img': { width: '100%', opacity: '60%'}}}>
                                <Grid item xs={2}>
                                    <img src={process.env.PUBLIC_URL + '/logo-viva.png'} alt="Viva Naturals"/>
                                </Grid>
                                <Grid item xs={2}>
                                    <img  src={process.env.PUBLIC_URL + '/logo-scotiabank.png'} alt="Scotiabank"/>
                                </Grid>
                                <Grid item xs={2}>
                                    <img  src={process.env.PUBLIC_URL + '/logo-dynamic-funds.png'} alt="Dynamic Funds"/>
                                </Grid>
                                <Grid item xs={2}>
                                <img style={{width: '74%'}} src={process.env.PUBLIC_URL + '/logo-procom.png'} alt="Procom"/>
                                </Grid>
                            </Grid>
                            <Button variant="contained" size="xlarge">Learn more > </Button>
                        </Container>
                        <Container sx={{paddingTop: 24}}> 
                            <Box sx={{mb: 8}}>
                                <SectionHeading 
                                        title="Selected Projects"
                                        description="Think. Make. Solve"
                                />
                            </Box>
                            <CardList/>
                        </Container>
                    </Box>
            </PageTransition>
           </>
    );
}

export default HomePage;