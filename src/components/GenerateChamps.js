import React from 'react';
import Champion from './Champion';
import ChampList from '../jsons/champs.json';

function GenerateChamps() {
    let champMap = ChampList.map(champ => <Champion key={champ.id} champ={champ}/>);
    return (<div>{champMap}</div>);
}

export default GenerateChamps;