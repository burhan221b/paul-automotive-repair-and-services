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
import VerifyGoogle from './components/VerifyGoogle';

function initializeAnalytics() {
  ReactGA.initialize('UA-150659608-1');
  ReactGA.pageview(window.location.pathname + window.location.search);

}

const App = () => {
  initializeAnalytics();
  return (
    <Router>
      <div className="App">
        <Nav />
        {/* <Switch> */}
        <Route path="/" exact component={Home} />
        {/* <Route path="/services/:id" exact component={Home} />
          <Route path="/about/:id" exact component={Home} />
          <Route path="/contact/:id" exact component={Home} /> */}
        {/* <Route path="/services/:id" exact component={Services} />
          <Route path="/about/:id" exact component={About} />
          <Route path="/contact/:id" exact component={Contact} /> */}
        {/* </Switch> */}
      </div>

    </Router>
  );
}

export default App;
