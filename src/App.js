import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: "Updating from State Kabethy"
  }

  updateNameHandler=(event)=>{
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 >My First Assignment</h1>
        </header>
        <UserInput 
        changed={this.updateNameHandler} 
        currentName={this.state.username}        />
        <UserOutput username="Updating with props kabethy"/>
        <UserOutput username={this.state.username}/>
        
      </div>
    );
  }
}

export default App;
