import React from 'react';
import Champion from './Champion';
import ChampList from '../../jsons/champs.json';
import '../../styles/grid.css';


function GenerateChamps(props) {
    let filterString = props.specific
    if (filterString === "jd") {
        return (<h1>Ah... I see... You're a man of culture as well</h1>)
    }
    let champsFiltered = ChampList.filter(champ => champ["name"].toLowerCase().startsWith(filterString.toLowerCase()))
    let champMap = champsFiltered.map(champ => <Champion key={champ.id} champ={champ} />)
    return (<div className="grid">{champMap}</div>);
}

export default GenerateChamps;