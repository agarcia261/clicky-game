import React from "react";
import "./style.css";

function Main (props){
    return (
        <div className="row container">
        {/* {console.log(this.state.images)} */}
        {props.images.map(picture => {
          return (
            <div className="col-md-3 image-div" key={picture.id} onClick={() => props.handleClick(picture.id)}>
                <img className="images" src={picture.src} alt=""  id={picture.id}  />
            </div>               
          )
        })}
        </div>
    )}
export default Main