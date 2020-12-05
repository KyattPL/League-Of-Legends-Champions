import React from 'react';
import '../../styles/champStyle.css';
import { Link } from 'react-router-dom';

function Champion(props) {
    let champion = props.champ;
    let firstLetter = champion.name[0].toLowerCase();
    return (
        <Link to={`/League-Of-Legends-Champions/champ/${champion.name}`}>
            <div className="champion">
                <img src={require(`../../img/champs/${firstLetter}/${champion.name}/${champion.img}`).default} alt={champion.name} />
                <h2>{props.champ.name}</h2>
            </div>
        </Link>
    )
}

export default Champion;