import React, { FC, useState, useEffect } from 'react';
import './PortfolioCard.css';
import { useTheme } from '@mui/material/styles';
import * as ROUTES from '../constants/routes';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

interface PortfolioCardProps {
    cardTitle: string;
    cardIntro: string;
    cardLink: string;
    bkd: string;
}


const PortfolioCard: FC<PortfolioCardProps> = (props) => {
    const [cardState, setCardState] = useState(props);

    const theme = useTheme();

    return (
    <Paper sx={{ m: 2 }} elevation={3}>
        <div className={`${cardState.bkd} portfolio-card`}>
            <h2>{cardState.cardTitle}</h2>
            <div className="card-detail">
                <div className="card-intro">
                    <p>{cardState.cardIntro}</p>
                </div>
                <Link  style={{textDecoration: 'none'}} to={cardState.cardLink} className="nav-btn">
                    <Button variant="contained" color={"primary"}>SEE WHAT I DID</Button>
                </Link>
            </div>
        </div>
    </Paper>
    );
}

export default PortfolioCard