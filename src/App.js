import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Play the piano',
        completed: false
      },
      {
        id: 2,
        title: 'Make love with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Go out and run',
        completed: false
      }
    ] 
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} /> 
      </div>
    );
  }
}

export default App;
