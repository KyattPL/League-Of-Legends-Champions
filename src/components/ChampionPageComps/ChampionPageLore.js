import React from 'react';

function ChampionPageLore(props) {
    let {biography, stories} = props.lore;
    return (<div>
        <h1>{biography}</h1>
        {stories.map(story => <h2>{story}</h2>)}
    </div>)
}

export default ChampionPageLore;