import React, { FC, ReactElement } from 'react';
import * as ROUTES from '../constants/routes';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Connect from './Connect';
import Work from './Work';
import Logo from '../images/logo-sm.png';
import Grid from '@mui/material/Grid';

const TopMenu: FC = (): ReactElement => {
  
    return (
      <div>
        <Grid container>
            <Grid item>
                <img src={Logo} alt="logo" />
            </Grid>
            <Grid item>
                <ul>
                    <li>
                        <Link to={ROUTES.HOME} className="nav-btn">HOME</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.WORK} className="nav-btn">WORK</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.ABOUT} className="nav-btn">ABOUT</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.CONNECT} className="nav-btn">CONNECT</Link>
                    </li>
                </ul>
            </Grid>
        </Grid>
        
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.WORK} element={<Work />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.CONNECT} element={<Connect />} />
        </Routes>
      </div>
    )
  };

  export default TopMenu;