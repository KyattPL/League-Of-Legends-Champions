import React from 'react';

function ChampionPage(props) {
    let champName = props.match.params.champName;
    let champObj = require(`../jsons/${champName.toLowerCase()}.json`);
    console.log(champObj);
    return (
        <div>
            <h1>Hello {champName}!</h1>
        </div>
    )
}

export default ChampionPage;