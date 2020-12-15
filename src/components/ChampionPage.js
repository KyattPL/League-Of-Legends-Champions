import React from 'react';
import ChampionPageLore from './ChampionPageComps/ChampionPageLore';
import ChampionPageGeneral from './ChampionPageComps/ChampionPageGeneral';
import ChampionPageAbilities from './ChampionPageComps/ChampionPageAbilities';
import '../styles/championPage.css';

function ChampionPage(props) {
    let champName = props.match.params.champName;
    let firstLetter = champName[0].toLowerCase();
    let champObj = require(`../jsons/champs/${firstLetter}/${champName.toLowerCase()}.json`);
    return (
        <div>
            <div className="container">
                <ChampionPageLore lore={champObj.lore} />
                <ChampionPageGeneral table={champObj.table} />
            </div>
            <ChampionPageAbilities abilities={champObj.abilities} name={champObj.table.name} />
        </div>
    )
}

export default ChampionPage;