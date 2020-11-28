import React from 'react';
import ChampionPageLore from './ChampionPageComps/ChampionPageLore';
import ChampionPageGeneral from './ChampionPageComps/ChampionPageGeneral';
import '../styles/championPage.css';

function ChampionPage(props) {
    let champName = props.match.params.champName;
    let champObj = require(`../jsons/${champName.toLowerCase()}.json`);
    console.log(champObj);
    return (
        <div className="container">
            <ChampionPageLore lore={champObj.lore} />
            <ChampionPageGeneral table={champObj.table} />
        </div>
    )
}

export default ChampionPage;