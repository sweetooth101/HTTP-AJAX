import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from "react-router-dom";

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends:[],
    };
  }
  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response)
      })
      
  }
  render() {
    return(
      <div className="friend-list">
        
        
      </div>
    );
    
  }
}

export default App;
