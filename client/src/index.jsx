import React from 'react';
import ReactDOM from 'react-dom';
require ('./style.css');

class Display extends React.Component{
  constructor() {
    super();
    this.state = {
      displayResult :0
    }
  }
  render() {
    return (<div className="display"><p className="displayText">
        {this.props.text || this.state.displayResult}
     </p>
    </div>);
  }
}
class Button extends React.Component{
  render() {
    return(<button className="textButton" onClick ={this.props.handleClick}>
        <span className="text">{this.props.text}</span>
        </button>);
  }
}
class Container extends React.Component{
  constructor() {
    super();
    this.number1 = "";
    this.equalToClicked = false;
   }
  handleClick(character) {
    if(character === "AC") {
      this.number1 = "";
      this.props.update(0);
    } else {
      if(character !== "=") {
        this.equalToClicked = false;
        this.number1 = (character === "CE") ? this.number1.substring(0,this.number1.length-1) : (this.number1 + character); 
        this.props.update(this.number1);
      } else {
        if(!(this.equalToClicked)) {
          try {
          this.number1 = eval(this.number1);
          this.props.update(eval(this.number1));
          this.equalToClicked = true;
        } catch(e) {
          this.props.update("Invalid Expression");
        }
        }
        
      }
    }
    
   }
  render() {
    var that = this;
    return (
      <div className = "container">
        <Button text="1" handleClick = {this.handleClick.bind(this, "1")}/>
        <Button text="2" handleClick = {this.handleClick.bind(this, "2")}/>
        <Button text="3" handleClick = {this.handleClick.bind(this, "3")}/>
        <Button text="+" handleClick = {this.handleClick.bind(this, "+")}/>
        <Button text="4" handleClick = {this.handleClick.bind(this, "4")}/>
        <Button text="5" handleClick = {this.handleClick.bind(this, "5")}/>
        <Button text="6" handleClick = {this.handleClick.bind(this, "6")}/>
        <Button text="-" handleClick = {this.handleClick.bind(this, "-")}/>
        <Button text="7" handleClick = {this.handleClick.bind(this, "7")}/>
        <Button text="8" handleClick = {this.handleClick.bind(this, "8")}/>
        <Button text="9" handleClick = {this.handleClick.bind(this, "9")}/>
        <Button text="*" handleClick = {this.handleClick.bind(this, "*")}/>
        <Button text="." handleClick = {this.handleClick.bind(this, ".")}/>
        <Button text="0" handleClick = {this.handleClick.bind(this, "0")}/>
        <Button text="=" handleClick = {this.handleClick.bind(this, "=")}/>
        <Button text="/" handleClick = {this.handleClick.bind(this, "/")}/>
        <Button text="AC" handleClick = {this.handleClick.bind(this, "AC")}/>
        <Button text="CE" handleClick = {this.handleClick.bind(this, "CE")}/>
     </div>);
  }
}
class Calculator extends React.Component{
  constructor() {
    super();
    this.state = {
      "number": ""
    }
  }
  updateNumber(value) {
    this.setState({"number":value });
  }
  render() {
    return(
      <div className="main">
        <Display text = {this.state.number} />
        <Container update={this.updateNumber.bind(this)}/>
      </div>);
  }
}
ReactDOM.render(<Calculator />, document.getElementById('app'));
