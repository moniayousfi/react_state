import "./Toogle.css";
import React, { Component } from "react";
class Toggle extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Monia",
      bio: "Si Tu veux tu peux",
      imgSrc: "/monia.jpeg",
      profession: "developpeuse web",
      displayed: true,
      counter: 0
      
    };
  }

 
  componentDidMount() {
    this.timerID = setInterval( () => this.tick(),      1000    );  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      counter: this.state.counter + 1
  
    });
  }
  toggle = () =>
    this.setState((currentState) => ({ displayed: !currentState.displayed }));
  render() {
    return (
      <div className="carte">
        <button onClick={this.toggle}>
          {" "}
          {this.state.displayed ? "show" : "hide"}
        </button>
        {this.state.displayed && (
          <div >
            {" "}
            <img
              src={this.state.imgSrc}
              alt="logo"
              style={{ width: "150px", height: "200px" }}
            />
            <br />
            {this.state.fullName}
            <br />
            {this.state.bio}
            <br />
            {this.state.profession}<br/>
            <input type="text" value={this.state.counter} />
          </div>
          
        )}
      </div>
    );
  }
}
export default Toggle;
