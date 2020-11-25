import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ChampionPage from './components/ChampionPage';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/champ/:champName" component={ChampionPage} />
          <Route path="/" component={ErrorPage}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
