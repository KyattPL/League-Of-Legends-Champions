import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

class Header extends Component {

    render() {
        return (
            <header className="headerContainer">
                <Link to={`/`} className="homeButton">
                    Home
                </Link>
                <div className="empty1"></div>
                <h1 className="headerTitle">League of Legends Wiki</h1>
                <div className="empty2"></div>
            </header>
        )
    }
}

export default Header;