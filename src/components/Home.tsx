import { Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Home: FC = (): ReactElement => {
  
    return (
        <Box sx={{ mt: 8 }}>
            <Paper sx={{ p: 2 }}>
                <Typography variant='h3'>Hey there and welcome...</Typography>   
                <Typography sx={{ mt: 2 }} variant='h5'>Thank you for visiting my site.</Typography>
                <Typography variant='body1'>
                    I am a software engineer working with React and C#.NET. I 
                    am currently a full stack developer in the Healthcare Industry.
                </Typography>
            </Paper>
        </Box>
    )
};

export default Home;