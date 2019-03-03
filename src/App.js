import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Main from "./components/Main";
import Gameinfo from "./components/Gameinfo";



class App extends Component {
   // Setting the component's initial state
   state = {
    score: 0,
    topScore: 0,
    images:[]
  };

  images = [
    {id:1, src:"/assets/images/ironman.png", clicked:false},
    {id:2, src:"/assets/images/blackpanther.png", clicked:false},
    {id:3, src:"/assets/images/blackwidow.png", clicked:false},
    {id:4, src:"/assets/images/captain.png", clicked:false},
    {id:5, src:"/assets/images/drstrange.png", clicked:false},
    {id:6, src:"/assets/images/falcon.png", clicked:false},
    {id:7, src:"/assets/images/hawk.png", clicked:false},
    {id:8, src:"/assets/images/hulk.png", clicked:false},
    {id:9, src:"/assets/images/vision.png", clicked:false},
    {id:10, src:"/assets/images/peter.png", clicked:false},
    {id:11, src:"/assets/images/spiderman.png", clicked:false},
    {id:12, src:"/assets/images/thor.png", clicked:false},
  ];

  handleClick = id => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    // event.preventDefault();
    let imgIndex = -1
    this.state.images.forEach( function (img, index){
      if (img.id == id){
        imgIndex=index
      }
    })
    if (this.images[imgIndex].clicked){
      this.lostGame()
    }
    else{
      this.images[imgIndex].clicked=true
      if (this.state.score>=this.state.topScore || this.state.topScore===0){
       this.setState({ score: this.state.score + 1, topScore: this.state.topScore +1 })
      }
      else{
        this.setState({ score: this.state.score + 1})
      }
      this.generateRandomImgs()

    }
  };
  generateRandomImgs = () => {
    let imagesRdm = this.images.sort(() => 0.5 - Math.random())
    this.setState({images:imagesRdm});
  }
  lostGame = () => {
    this.setState({score: 0})
    this.images.forEach(function (img){
      img.clicked = false
    })
    this.generateRandomImgs()

  }
  componentDidMount() {
      this.generateRandomImgs()
  }
  render() {
    return (
      <Router>
        <div>
          <Nav 
            score = {this.state.score}
            topScore = {this.state.topScore}
          />
          <Gameinfo />
          <Main 
            images = {this.state.images}
            handleClick = {this.handleClick}
          />
          {/* <Route exact path="/" component={Main} /> */}
        </div>
      </Router>   
      

    );
  }
}

export default App;
