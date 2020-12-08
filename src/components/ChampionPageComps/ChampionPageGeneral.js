import React from 'react';
import '../../styles/pageGeneral.css';

function GenerateTableSection(values) {
    let lines = [];
    let iter = 1;
    for (const [key, value] of Object.entries(values)) {
        lines.push(
            <tr key={iter}>
                <td className="generalTableData generalTableTextData generalTableKey">{key}</td>
                <td className="generalTableData generalTableTextData">{value}</td>
            </tr>
        );
        iter++;
    }
    return lines;
}

function ChampionPageGeneral(props) {
    let { name, image, general, statistics } = props.table;
    let firstLetter = name[0].toLowerCase();
    return (
        <table className="infoBox generalTable">
            <tbody>
                <tr>
                    <th className="generalTableHeader" colSpan="2">{name}</th>
                </tr>
                <tr>
                    <td colSpan="2" className="generalTableData">
                        <img src={require(`../../img/champs/${firstLetter}/${name}/${image}`).default} alt={name} />
                    </td>
                </tr>
                <tr>
                    <th className="generalTableHeader" colSpan="2">General Information</th>
                </tr>
                {GenerateTableSection(general)}
                <tr>
                    <th className="generalTableHeader" colSpan="2">Statistics</th>
                </tr>
                {GenerateTableSection(statistics)}
            </tbody>
        </table>
    );
}

export default ChampionPageGeneral;