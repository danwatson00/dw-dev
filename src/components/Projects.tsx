import React, { FC, ReactElement } from 'react';
import PortfolioCard from './PortfolioCard';
import * as ROUTES from '../constants/routes';


const Projects: FC = (): ReactElement => {
  
    return (
        <div>
          <PortfolioCard 
            cardTitle="AXEFAX" 
            cardIntro="A music startup company wanted a way to showcase their Guitar serial number API"
            cardLink={ROUTES.AXEFAX}
            bkd="axeCard"
          />
          <PortfolioCard
            cardTitle="MY CAMERA BAGS"
            cardIntro="A personal project to make an app for organizing camera gear"
            cardLink="./mycamerabags"
            bkd="camera"
          />
          <PortfolioCard
            cardTitle="HACK FOR THE COMMUNITY"
            cardIntro="Our first place project for The Boys and Girls Club at the Hack for the Community hackathon"
            cardLink="./hackathon"
            bkd="hackathon"
          />
        </div>
    )
};

  export default Projects;