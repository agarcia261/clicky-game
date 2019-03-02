import React, { Component } from "react";
import "./style.css";

class Main extends Component {
  // Setting the component's initial state
  state = {
    score: 0,
    topScore: 0,
    images:[]
  };

  images = [
    {id:1, src:"/assets/images/ironman.png"},
    {id:2, src:"/assets/images/blackpanther.png"},
    {id:3, src:"/assets/images/blackwidow.png"},
    {id:4, src:"/assets/images/captain.png"},
    {id:5, src:"/assets/images/drstrange.png"},
    {id:6, src:"/assets/images/falcon.png"},
    {id:7, src:"/assets/images/hawk.png"},
    {id:8, src:"/assets/images/hulk.png"},
    {id:9, src:"/assets/images/vision.png"},
    {id:10, src:"/assets/images/peter.png"},
    {id:11, src:"/assets/images/spiderman.png"},
    {id:12, src:"/assets/images/thor.png"},
  ];

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log(this)

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    // alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    // this.setState({
    //   firstName: "",
    //   lastName: ""
    // });
  };
  componentDidMount() {
    this.setState({images:this.images});
  }

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
        <div className="row container">
        {/* {console.log(this.state.images)} */}
        {this.state.images.map(picture => {
          return (
            <div className="col-md-3 image-div" key={picture.id}>
                <img className="images" src={picture.src} alt=""  id={picture.id} onClick={this.handleFormSubmit} />
            </div>               
          )
        })}
        </div>
    )
    
  }
}

export default Main;