import React from 'react';
import '../styles/champStyle.css';
import {Link} from 'react-router-dom';

function Champion(props) {
    return (
        <Link to={`/champ/${props.champ.name}`}>
            <div className="champion">
                <img src={require(`../img/${props.champ.img}`).default} alt={props.champ.name} />
                <h2>{props.champ.name}</h2>
            </div>
        </Link>
    )
}

export default Champion;