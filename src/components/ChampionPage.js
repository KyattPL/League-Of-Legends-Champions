import React from 'react';
import ChampionPageLore from './ChampionPageComps/ChampionPageLore';
import ChampionPageGeneral from './ChampionPageComps/ChampionPageGeneral';
import ChampionPageAbilities from './ChampionPageComps/ChampionPageAbilities';
import '../styles/championPage.css';

class ChampionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.match.params.champName,
            firstLetter: props.match.params.champName[0].toLowerCase(),
            champObj: null
        }
    }

    componentDidMount() {
        import(`../jsons/champs/${this.state.firstLetter}/${this.state.name.toLowerCase()}.json`).then((champ) => {
            this.setState({ champObj: champ });
        });
    }

    render() {
        let hasMisc = false;
        if (this.state.champObj) {
            hasMisc = 'misc' in this.state.champObj;
        }
        return (
            <div>
                <div className="container">
                    {this.state.champObj && <ChampionPageLore lore={this.state.champObj.lore} />}
                    {this.state.champObj && <ChampionPageGeneral table={this.state.champObj.table} />}
                </div>
                {this.state.champObj && hasMisc && <ChampionPageAbilities abilities={this.state.champObj.abilities} name={this.state.champObj.table.name} misc={this.state.champObj.misc} />}
                {this.state.champObj && !hasMisc && <ChampionPageAbilities abilities={this.state.champObj.abilities} name={this.state.champObj.table.name} />}
            </div>
        );
    }
}

export default ChampionPage;