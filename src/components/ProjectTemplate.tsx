import React, { FC, useState, useEffect } from 'react';
import './ProjectTemplate.css';
import TechIcons from './TechIcons';
import githubIcon from '../images/github.png';
import webIcon from '../images/internet.png';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


interface ProjectTemplateProps {
    bkg: string;
    ask: string;
    challenge: string;
    imgName: string;
    imgAlt: string;
    g1h: string;
    g1p: string;
    g2h: string;
    g2p: string;
    g3h: string;
    g3p: string;
    tech: string; 
    techIcons: string[];
    learned: string;
}

const ProjectTemplate: FC<ProjectTemplateProps> = (props) => {

    const [projectTemplateState, setProjectTemplateState] = useState<ProjectTemplateProps>(props);

    useEffect(() => {
        setProjectTemplateState(props);
    }, [props]);
    return (
        <div className="projectTemplate">
            <Paper sx={{ m: 2 }} elevation={7}>
                <div className={`${projectTemplateState.bkg} ask projDiv`}>
                    <h2>THE ASK</h2>
                    <div className="desc">
                        <p>{projectTemplateState.ask}</p>
                    </div>
                </div>
            </Paper>
            <Paper sx={{ m: 2 }} elevation={7}>
                <div className="challenge projDiv">
                    <h2>THE CHALLENGE</h2>
                    <div className="challengeText">
                        <div className="desc">
                            <p>{projectTemplateState.challenge}</p>
                        </div>
                        <img src={require(`../images/${projectTemplateState.imgName}.jpg`).default} alt={projectTemplateState.imgAlt} />
                    </div>
                </div>
            </Paper>
            <Paper sx={{ m: 2 }} elevation={7}>
            <div className="goals projDiv">
                <h2>THE GOALS</h2>
                <div className="goalsCards">
                <div className="goalOne goal">
                    <h3>{projectTemplateState.g1h}</h3>
                    <p>{projectTemplateState.g1p}</p>
                </div>
                <div className="goalTwo goal">
                    <h3>{projectTemplateState.g2h}</h3>
                    <p>{projectTemplateState.g2p}</p>
                </div>
                <div className="goalThree goal">
                    <h3>{projectTemplateState.g3h}</h3>
                    <p>{projectTemplateState.g3p}</p>
                </div>
                </div>
            </div>
            </Paper>
            <Paper sx={{ m: 2 }} elevation={7}>
                <div className="tech projDiv">
                    <h2>THE TECH</h2>
                    <p>{projectTemplateState.tech}</p>
                    <TechIcons icons={projectTemplateState.techIcons} />
                </div>
            </Paper>
            <Paper sx={{ m: 2 }} elevation={7}>
                <div className="process projDiv">
                    <h2>THE PROCESS</h2>
                </div>
            </Paper>
            <Paper sx={{ m: 2 }} elevation={7}>
                <div className="product projDiv">
                    <h2>THE PRODUCT</h2>
                    <Box sx={{ height: 100 }}>
                        <Link  
                            underline="none"
                            component="button"
                            variant="body2"
                            onClick={() => {
                                console.info("I'm a button.");
                            }}
                        >
                            <img src={githubIcon} alt="github icon" />
                            <Typography>Github</Typography>
                        </Link>
                    </Box>
                    <Box>
                        <Link  
                            underline="none"
                            component="button"
                            variant="body2"
                            onClick={() => {
                                console.info("I'm a button.");
                            }}
                        >
                            <a>
                                <img src={webIcon} alt="world wide web icon" />
                                <Typography>Live Site</Typography>
                            </a>
                        </Link>
                    </Box>
                    <Box>
                        <Link  
                            underline="none"
                            component="button"
                            variant="body2"
                            onClick={() => {
                                console.info("I'm a button.");
                            }}
                        >
                            <img src={webIcon} alt="world wide web icon" />
                            <Typography>Design Case Study</Typography>
                        </Link>
                    </Box>
                </div>
            </Paper>
            <Paper sx={{ m: 2 }} elevation={7}>
                <div className="learned projDiv">
                    <h2>WHAT I LEARNED</h2>
                    <p>{projectTemplateState.learned}</p>
                </div>
            </Paper>
        </div>
    );
}

export default ProjectTemplate