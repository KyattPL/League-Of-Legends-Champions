import React from 'react';
import '../styles/champStyle.css';

function Champion(props) {
    return (
        <div className="champion">
            <img src={require(`../img/${props.champ.img}`).default} alt={props.champ.name} />
            <h2>{props.champ.name}</h2>
        </div>
    )
}

export default Champion;