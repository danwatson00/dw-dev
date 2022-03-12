import React, { FC, ReactElement, useEffect, useState } from 'react';
import TopMenu from './TopMenu';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import * as ROUTES from '../constants/routes';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Connect from './Connect';
import Projects from './Projects';
import Footer from './Footer';
import Axefax from './Axefax';

const Layout: FC = (): ReactElement => {
  
    return (
        <Container maxWidth="xl">
            <Grid container>
                <Grid item xs={12}>
                    <TopMenu />
                </Grid>
                <Grid item xs={12}>
                    <Routes>
                        <Route path={ROUTES.HOME} element={<Home />} />
                        <Route path={ROUTES.PROJECTS} element={<Projects />} />
                        <Route path={ROUTES.ABOUT} element={<About />} />
                        <Route path={ROUTES.CONNECT} element={<Connect />} />
                        <Route path={ROUTES.AXEFAX} element={<Axefax />} />
                    </Routes>
                </Grid>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Grid>
        </Container>
    )
};

export default Layout;