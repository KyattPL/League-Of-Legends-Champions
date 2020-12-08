import React from 'react';
import '../../styles/pageAbilities.css';

function GenerateAbilityDesc(props) {
    let ability = props.ability;
    let countUpgrades = ability["lvl-upgrades"].length;
    if (countUpgrades === 0) {
        return <tr><td className="abilityDesc">{ability["description"]}</td></tr>;
    } else {
        let rows = [];
        rows.push(
            <tr key={0}>
                <td className="abilityDesc" rowSpan={countUpgrades}>{ability["description"]}</td>
                <td className="abilityLvl">{ability["lvl-upgrades"][0]}</td>
            </tr>
        );
        for (let i = 1; i < countUpgrades; i++) {
            rows.push(<tr key={i}><td className="abilityLvl">{ability["lvl-upgrades"][i]}</td></tr>);
        }
        return rows;
    }
}

function GenerateAbilityStats(props) {
    let ability = props.ability;
    if (props.hasStats) {
        let statsBox = [];
        for (const [key, value] of Object.entries(ability.stats)) {
            statsBox.push(<span>{key[0].toUpperCase() + key.slice(1) + ": " + value + " "}</span>);
        }
        return <tr><td className="abilityStats">{statsBox}</td></tr>;
    }
    return null;
}

function GenerateAbilityName(props) {
    let ability = props.ability;
    let firstLetter = props.champ[0].toLowerCase();
    if (props.hasStats) {
        return (
            <tr>
                <td rowSpan="2" className="abilityImg">
                    <img src={require(`../../img/champs/${firstLetter}/${props.champ}/${ability["img"]}`).default} alt={ability["name"]}/>
                </td>
                <td rowSpan="1" className="abilityName">{ability["name"]}</td>
                <td rowSpan="2" className="abilityKey">{ability["key"]}</td>
            </tr>
        );
    } else {
        return (
            <tr>
                <td rowSpan="2" className="abilityImg">
                    <img src={require(`../../img/champs/${firstLetter}/${props.champ}/${ability["img"]}`).default} alt={ability["name"]}/>
                </td>
                <td rowSpan="2" className="abilityName">{ability["name"]}</td>
                <td rowSpan="2" className="abilityKey">{ability["key"]}</td>
            </tr>
        );
    }
}

function GenerateTable(props) {
    let ability = props.ability;
    let hasStats = Object.keys(ability.stats).length > 0;
    return (
        <div className="ability">
            <table className="abilityHeader">
                <tbody>
                    <GenerateAbilityName champ={props.champ} ability={ability} hasStats={hasStats}/>
                    <GenerateAbilityStats ability={ability} hasStats={hasStats}/>
                </tbody>
            </table>
            <table className="abilityMain">
                <tbody>
                    <GenerateAbilityDesc ability={ability} />
                </tbody>
            </table>
        </div>
    )
}

function ChampionPageAbilities(props) {
    let abilities = props.abilities;
    let champName = props.name;
    return (
        <div className="abilitiesContainer">
            {abilities.map(ab => <GenerateTable key={ab["name"]} ability={ab} champ={champName}/>)}
        </div>
    );
}

export default ChampionPageAbilities;