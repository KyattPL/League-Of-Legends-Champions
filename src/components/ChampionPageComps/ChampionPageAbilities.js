import React from 'react';
import '../../styles/pageAbilities.css';

function GenerateTable(props) {
    let ability = props.ability;
    console.log(ability);
    return (
        <table className="ability">
            <tbody>
                <tr>
                    <th>{ability["img"]}</th>
                    <th>{ability["name"]}</th>
                </tr>
            </tbody>
        </table>
    )
}

function ChampionPageAbilities(props) {
    let abilities = props.abilities;
    return (
        <div className="abilitiesContainer">
            {abilities.map(ab => <GenerateTable key={ab["name"]} ability={ab}/>)}
        </div>
    );
}

export default ChampionPageAbilities;