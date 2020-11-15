import React from 'react';

function Champion(props) {
    return (
        <div>
            <img src={require('/img/aatrox.png')} />
            <img src={require(props.champ.img)} alt=''/>
            <h2>{props.champ.name}</h2>
        </div>
    )
}

export default Champion;