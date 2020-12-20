import React from 'react';
import '../../styles/pageGeneral.css';
import '../../jsons/statsNameToImg.json';

function GenerateTableSection(values, isStats) {
    let lines = [];
    let iter = 1;
    if (!isStats) {
        for (const [key, value] of Object.entries(values)) {
            if (key !== "Cost") {
                lines.push(
                    <tr key={iter}>
                        <td className="generalTableData generalTableTextData generalTableKey">{key}</td>
                        <td className="generalTableData generalTableTextData">{value}</td>
                    </tr>
                );
            } else {
                let price = value.split(" ");
                lines.push(
                    <tr key={iter}>
                        <td className="generalTableData generalTableTextData generalTableKey">{key}</td>
                        <td className="generalTableData generalTableTextData">
                            {price[0]}
                            <img className="logo" src={process.env.PUBLIC_URL + `/img/misc/BEPoints.png`} alt="BE logo" />
                            {price[1]}
                            <img className="logo" src={process.env.PUBLIC_URL + `/img/misc/RPoints.png`} alt="RP logo" />
                        </td>
                    </tr>
                )
            }
            iter++;
        }
    } else {
        const statsJSON = require(`../../jsons/statsNameToImg.json`);
        let iter = 1;
        for (const [key, value] of Object.entries(values)) {
            lines.push(
                <tr key={iter}>
                    <td className="generalTableData generalTableTextData generalTableKey">
                        <img className="statLogo" src={process.env.PUBLIC_URL + `/img/misc/${statsJSON[key]}`} alt="stat icon" />
                        {key}
                    </td>
                    <td className="generalTableData generalTableTextData">{value}</td>
                </tr>
            );
            iter++;
        }
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
                        <img src={process.env.PUBLIC_URL + `/img/champs/${firstLetter}/${name}/${image}`} alt={name} />
                    </td>
                </tr>
                <tr>
                    <th className="generalTableHeader" colSpan="2">General Information</th>
                </tr>
                {GenerateTableSection(general, false)}
                <tr>
                    <th className="generalTableHeader" colSpan="2">Statistics</th>
                </tr>
                {GenerateTableSection(statistics, true)}
            </tbody>
        </table>
    );
}

export default ChampionPageGeneral;