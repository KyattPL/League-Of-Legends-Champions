import React, { Component } from 'react';
import '../../styles/pageLore.css';

class ChampionPageLore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            texts: [this.props.lore.biography].concat(this.props.lore.stories),
            currText: 0
        };
    }

    changeButtonStyles = (event, index) => {
        event.target.className = "button activeButton";
        for (let i = 0; i < this.state.texts.length; i++) {
            if (i !== index) {
                document.getElementById(`${i}`).className = "button inactiveButton";
            }
        }
    }

    changePage = (event, index) => {
        if (index === this.state.currText) {
            return;
        } else {
            this.setState({
                texts: this.state.texts,
                currText: index
            }, () => this.changeButtonStyles(event, index));
        }
    }

    storiesButtons() {
        if (this.state.texts.length <= 2) {
            return <li id="1" className="button inactiveButton" onClick={(event) => this.changePage(event, 1)}>Story</li>
        } else {
            let createdButtons = this.state.texts.slice(1).map((text, index) =>
                <li id={index + 1} className="button inactiveButton" onClick={(event) => this.changePage(event, index + 1)}>Story #{index + 1}</li>);
            return (
                createdButtons
            );
        }
    }

    render() {
        return (
            <div className="loreContainer">
                <ul className="buttons">
                    <li id="0" className="button activeButton" onClick={(event) => this.changePage(event, 0)}>Biography</li>
                    {this.storiesButtons()}
                </ul>
                <div className="textBox">
                    <div className="text">
                        <p>{this.state.texts[this.state.currText]}</p>
                    </div>
                </div>
            </div >
        );
    }
}

export default ChampionPageLore;