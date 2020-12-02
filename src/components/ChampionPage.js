import React from 'react';
import ChampionPageLore from './ChampionPageComps/ChampionPageLore';
import ChampionPageGeneral from './ChampionPageComps/ChampionPageGeneral';
import ChampionPageAbilities from './ChampionPageComps/ChampionPageAbilities';
import '../styles/championPage.css';

function ChampionPage(props) {
    let champName = props.match.params.champName;
    let champObj = require(`../jsons/${champName.toLowerCase()}.json`);
    return (
        <div>
            <div className="container">
                <ChampionPageLore lore={champObj.lore} />
                <ChampionPageGeneral table={champObj.table} />
            </div>
            <ChampionPageAbilities abilities={champObj.abilities} />
        </div>
    )
}

export default ChampionPage;