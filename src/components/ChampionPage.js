import React from 'react';
import ChampionPageLore from './ChampionPageComps/ChampionPageLore';

function ChampionPage(props) {
    let champName = props.match.params.champName;
    let champObj = require(`../jsons/${champName.toLowerCase()}.json`);
    console.log(champObj);
    return (
        <div>
            <h1>Hello {champName}!</h1>
            <ChampionPageLore lore={champObj.lore}/>
        </div>
    )
}

export default ChampionPage;