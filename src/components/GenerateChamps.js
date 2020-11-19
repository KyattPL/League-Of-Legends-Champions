import React from 'react';
import Champion from './Champion';
import ChampList from '../jsons/champs.json';
import '../styles/grid.css';


function GenerateChamps() {
    let champMap = ChampList.map(champ => <Champion key={champ.id} champ={champ} />)
    return (<div className="grid">{champMap}</div>);
}

export default GenerateChamps;