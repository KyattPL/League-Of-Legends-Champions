import React, { Component } from 'react';
import GenerateChamps from './GenerateChamps';
import '../../styles/main.css';

class Main extends Component {

    constructor() {
        super()
        this.state = {
            inputFieldVal: ""
        }
    }

    onChangeText = (event) => {
        this.setState({ inputFieldVal: event.target.value })
    }

    render() {
        return (
            <main>
                <input type="text" className="searchChampBox" value={this.state.inputFieldVal} onChange={this.onChangeText} />
                <div className="gridBox">
                    <GenerateChamps specific={this.state.inputFieldVal} />
                </div>
            </main>
        )
    }
}

export default Main;