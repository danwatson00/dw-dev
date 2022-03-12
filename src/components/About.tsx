import React, { FC, ReactElement } from 'react';
import Me from '../images/dan_watson.jpg';


const About: FC = (): ReactElement => {
  
    return (
        <div className="about">
        <h1>About Me</h1>
        <img className="me" src={Me} alt="Dan Watson" />
        <p>Hi, I'm Dan. Thank you for visiting my site! I am a web developer and 
        UI/UX designer based in Nashville, Tennessee. Since completing the six month 
        Front End Development and UI/UX Cohort at Nashville Software School in June of 
        2018, I have been working and gaining valuable experience as a full stack web 
        developer and designer.</p> 
        <p>Prior to that I owned my own business as a photographer and designer. and 
        have also worked full-time as a teacher. I received my Master of Fine Arts 
        degree in photography from the Savannah College of Art and Design and my 
        Bachelor of Arts in Studio Art and Communications from Clark University in 
        Worcester, Massachusetts.</p>
        <p>Working in all of these facets of the creative process has informed how I 
        approach web development. Development is very much a creative process, and 
        one that does not begin with coding. It begins with the user and understanding 
        their needs. I enjoy putting myself in the shoes of the user and determining 
        the best way to achieve their objectives. As developers, we are in the business 
        of helping people and solving problems. I am motivated by great challenges and 
        enjoy building apps that are intuitive and useful. Difficult problems are the 
        most satisfactory obstacles to overcome and reaching those goals with a team of 
        individuals is especially exciting. In my career, I hope to always continue 
        learning from my peers and growing through my passion for development and 
        design.</p>
        </div>
    )
};

  export default About;