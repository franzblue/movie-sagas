import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import List from '../List/List';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>

        <Router>
          {/* ADD PAGES! */}
          <Route exact path='/' component={List}/>
          <Route exact path='/details' component={Details}/>
          <Route exact path='/addmovie' component={AddMovie}/>
          <Link to="/addmovie">Add New Movie</Link>
        </Router>
      </div>
    );
  }
}

export default App;
