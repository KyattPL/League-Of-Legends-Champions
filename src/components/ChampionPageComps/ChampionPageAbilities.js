import React from 'react';
import '../../styles/pageAbilities.css';

function GenerateAbilityDesc(props) {
    let ability = props.ability;
    let countUpgrades = ability["lvl-upgrades"].length;
    if (countUpgrades === 0) {
        return <tr><td className="abilityDesc" dangerouslySetInnerHTML={{ __html: ability["description"] }}></td></tr>;
    } else {
        let rows = [];
        rows.push(
            <tr key={0}>
                <td className="abilityDesc" rowSpan={countUpgrades} dangerouslySetInnerHTML={{ __html: ability["description"] }}></td>
                <td className="abilityLvl" dangerouslySetInnerHTML={{ __html: ability["lvl-upgrades"][0] }}></td>
            </tr>
        );
        for (let i = 1; i < countUpgrades; i++) {
            rows.push(<tr key={i}><td className="abilityLvl" dangerouslySetInnerHTML={{ __html: ability["lvl-upgrades"][i] }}></td></tr>);
        }
        return rows;
    }
}

function GenerateAbilityStats(props) {
    let ability = props.ability;
    if (props.hasStats) {
        let statsBox = [];
        let statsNumber = ability["stats"].length;
        for (let i = 0; i < statsNumber; i++) {
            statsBox.push(<div key={i} dangerouslySetInnerHTML={{ __html: ability["stats"][i] }}></div>);
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
                    <img src={process.env.PUBLIC_URL + `/img/champs/${firstLetter}/${props.champ}/${ability["img"]}`} alt={ability["name"]} />
                </td>
                <td rowSpan="1" className="abilityName">{ability["name"]}</td>
                <td rowSpan="2" className="abilityKey">{ability["key"]}</td>
            </tr>
        );
    } else {
        return (
            <tr>
                <td rowSpan="2" className="abilityImg">
                    <img src={process.env.PUBLIC_URL + `/img/champs/${firstLetter}/${props.champ}/${ability["img"]}`} alt={ability["name"]} />
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
    let containerClass = "ability";
    if (props.misc != null) {
        if ('changesForm' in props.misc && 'form' in ability) {
            if (ability.form === "1") {
                containerClass = "ability 1";
            } else {
                containerClass = `ability ${ability.form} off`;
            }
        }
    }
    return (
        <div className={containerClass}>
            <table className="abilityHeader">
                <tbody>
                    <GenerateAbilityName champ={props.champ} ability={ability} hasStats={hasStats} />
                    <GenerateAbilityStats ability={ability} hasStats={hasStats} />
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

function changeForm(event, howManyForms) {
    let toShow = document.getElementsByClassName(`ability ${event.target.id} off`);
    for (let i = toShow.length - 1; i >= 0; i--) {
        toShow[i].className = `ability ${event.target.id}`;
    }
    for (let i = 1; i <= howManyForms; i++) {
        if (`${i}` !== event.target.id) {
            let toHide = document.getElementsByClassName(`ability ${i}`);
            for (let j = toHide.length - 1; j >= 0; j--) {
                toHide[j].className = `ability ${i} off`;
            }
        }
    }
}

function ChampionPageAbilities(props) {
    let abilities = props.abilities;
    let champName = props.name;
    let misc = null;
    if ('misc' in props) {
        misc = props.misc;
    }
    let additionalTable = null;
    if (misc != null) {
        if ("changesForm" in misc) {
            let buttons = [];
            for (let i = 0; i < misc.howManyForms; i++) {
                buttons.push(<li key={i} className="formsButton" id={i + 1} onClick={(event) => changeForm(event, misc.howManyForms)}>{misc.forms[i]}</li>);
            }
            additionalTable = <ul className="formsTable">{buttons}</ul>;
        }
    }
    return (
        <div className="abilitiesContainer">
            {additionalTable}
            {abilities.map((ab, index) => <GenerateTable key={index} ability={ab} champ={champName} misc={misc} />)}
        </div>
    );
}

export default ChampionPageAbilities;