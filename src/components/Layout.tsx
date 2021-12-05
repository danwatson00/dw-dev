import React, { FC, ReactElement } from 'react';
import TopMenu from './TopMenu';
import Main from './Main';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const Layout: FC = (): ReactElement => {
  
    return (
        <Container maxWidth="xl">
            <Grid container>
                <Grid item xs={12}>
                    <TopMenu />
                </Grid>
                <Grid item>
                    <Main />
                </Grid>
            </Grid>
        </Container>
    )
};

export default Layout;