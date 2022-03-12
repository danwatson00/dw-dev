import React, { FC, useState, useEffect } from 'react';
import './TechIcons.css';

interface TechIconsProps {
    icons: string[];
}

const TechIcons: FC<TechIconsProps> = (props) => {

    const [techIconsState, setTechIconsState] = useState(props);

    useEffect(() => {
        setTechIconsState(props)
    }, [props]);

    return (
        <div className="techIcons">
            {techIconsState.icons.map(function(iconName, index){
                return (
                    <img className="techIcon"
                        key={index} 
                        src={require(`../images/${iconName}.png`).default} 
                        alt={iconName + ' icon'} 
                    />
                )
            })}
        </div>
    );
}

export default TechIcons;