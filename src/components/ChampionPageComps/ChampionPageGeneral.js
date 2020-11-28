import React from 'react';
import '../../styles/pageGeneral.css';

function GenerateTableSection(values) {
    let lines = [];
    for (const [key, value] of Object.entries(values)) {
        lines.push(
            <tr>
                <td>{key}</td>
                <td>{value}</td>
            </tr>
        );
    }
    return lines;
}

function ChampionPageGeneral(props) {
    let { name, image, general, statistics } = props.table;
    console.log(image);
    return (
        <table className="infoBox">
            <tr>
                <th colSpan="2">{name}</th>
            </tr>
            <tr>
                <td colSpan="2">
                    <img src={require(`../../img/${image}`).default} alt={name} />
                </td>
            </tr>
            <tr>
                <th colSpan="2">General Information</th>
            </tr>
            {GenerateTableSection(general)}
            <tr>
                <th colSpan="2">Statistics</th>
            </tr>
            {GenerateTableSection(statistics)}
        </table>
    );
}

export default ChampionPageGeneral;