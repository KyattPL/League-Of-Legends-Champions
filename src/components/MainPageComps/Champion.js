import React from 'react';
import '../../styles/champStyle.css';
import { Link } from 'react-router-dom';

function Champion(props) {
    let champion = props.champ;
    let firstLetter = champion.name[0].toLowerCase();
    return (
        <Link to={`/champ/${champion.name}`}>
            <div className="champion">
                <img src={process.env.PUBLIC_URL + `/img/champs/${firstLetter}/${champion.name}/${champion.img}`} alt={champion.name} />
                <h2>{props.champ.name}</h2>
            </div>
        </Link>
    )
}

export default Champion;