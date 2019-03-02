import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Main from "./components/Main";
import Gameinfo from "./components/Gameinfo";



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Gameinfo />
          <Route exact path="/" component={Main} />
        </div>
      </Router>      

    );
  }
}

export default App;
