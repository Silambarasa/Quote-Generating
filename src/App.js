import React from "react";
import axios from "axios";

import './App.css'

class App extends React.Component {

  state = {
    advice: "",
    author: ""   
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((res) => {
        const { advice, author } = res.data.slip; 

        this.setState({ advice, author });

      })
      .catch((err) => {
        console.log(err);
      });
  }

  render(){
    return (
      <div className="app">
        <div className="card">
          
          <div className="advice-header">
            <span>"</span>  
            {this.state.advice}
          </div>
          
          <div className="author">
            <span>- {this.state.author}</span>
          </div>

        </div>  
      </div>
    );
  }

}

export default App; 
