import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Connect from './components/connect/Connect';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/connect" component={Connect} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
