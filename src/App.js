import React from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// Stylesheets
import './scss/App.scss';

// Components
import Nav from './components/Nav';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';


ReactGA.initialize('UA-150659608-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </div>

    </Router>
  );
}

export default App;
