import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('http://localhost:3000/users')
      .then(users => {
        this.setState({users});
        console.log(users);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        
      </div>
    )
  }
} 

export default App;
