import React, { Suspense, lazy } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/MainPageComps/Main';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';

const ChampPage = lazy(() => import('./components/ChampionPage'));

function App() {
  return (
    <Router basename="/" >
      <div className="App">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/champ/:champName" component={ChampPage} />
            <Route path="/" component={ErrorPage} />
          </Switch>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
