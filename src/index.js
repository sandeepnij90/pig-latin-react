import React from "react";
import { render } from "react-dom";
import image from './img/pig.png';
import "./css/index.scss";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      message:'Enter the text you wish to convert to pig latin below'
    }
  }

  convertMessage(event){
    event.preventDefault();
    var textArea = document.querySelector('textarea');
    var words = textArea.value.split(' ');
    var convertedWord = words.map(word=>{
      var letters = word.split('');
      letters.push(letters.shift());
      return `${letters.join('')}ay`
    });
    this.setState({
      message: convertedWord.join(' ')
    })
  }

  render(){
    return(
      <div className="container">
        <h1>Pig latin</h1>
        <img src={image} />
        <p>{ this.state.message }</p>
        <form>
        <textarea />
        <button onClick={event=>this.convertMessage(event)}>Convert</button>
        </form>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
