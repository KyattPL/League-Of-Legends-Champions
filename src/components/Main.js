import React, { Component } from 'react';
import GenerateChamps from './GenerateChamps';
import '../styles/main.css';

class Main extends Component {

    constructor() {
        super()
        this.state = {
            inputFieldVal: ""
        }
    }

    onChangeText = (event) => {
        this.setState({ inputFieldVal: event.target.value })
        console.log("works")
    }

    render() {
        return (
            <main>
                <input type="text" value={this.state.inputFieldVal} onChange={this.onChangeText} />
                <GenerateChamps specific={this.state.inputFieldVal} />
            </main>
        )
    }
}

export default Main;