import React from 'react';
import ChampionPageLore from './ChampionPageComps/ChampionPageLore';
import ChampionPageGeneral from './ChampionPageComps/ChampionPageGeneral';
import ChampionPageAbilities from './ChampionPageComps/ChampionPageAbilities';
import '../styles/championPage.css';

class ChampionPage extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            name: props.match.params.champName,
            firstLetter: props.match.params.champName[0].toLowerCase(),
            champObj: require(`../jsons/champs/a/aatrox.json`)
        }
    }

    componentDidMount() {
        import(`../jsons/champs/${this.state.firstLetter}/${this.state.name.toLowerCase()}.json`).then((champ) => {
            this.setState({ champObj: champ });
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <ChampionPageLore lore={this.state.champObj.lore} />
                    <ChampionPageGeneral table={this.state.champObj.table} />
                </div>
                <ChampionPageAbilities abilities={this.state.champObj.abilities} name={this.state.champObj.table.name} />
            </div>
        );
    }
}

export default ChampionPage;