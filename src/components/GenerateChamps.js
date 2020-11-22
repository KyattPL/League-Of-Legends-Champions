import React from 'react';
import Champion from './Champion';
import ChampList from '../jsons/champs.json';
import '../styles/grid.css';


function GenerateChamps(props) {
    let filterString = props.specific
    let champsFiltered = ChampList.filter(champ => champ["name"].toLowerCase().startsWith(filterString.toLowerCase()))
    let champMap = champsFiltered.map(champ => <Champion key={champ.id} champ={champ} />)
    return (<div className="grid">{champMap}</div>);
}

export default GenerateChamps;