import './App.css';
import React from 'react';
import { uuid } from 'uuidv4';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todo: "",
      todos: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      todo: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.todo != ""){
      this.setState({
        todo: "",
        todos: [...this.state.todos, {id: uuid(), name: this.state.todo}]
      });
    }
  }

  render(){
    const {todos, todo} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1>To-Do</h1>
        </header>
        <body className="App-body">
          <ul className="App-list">
            {todos.map(
              todo => 
                (
                  <li key={todo.id} className="App-list-elem">{todo.name}</li>
                )
              )
            }
          </ul>
          <form className="App-form">
            <label>
              New task:
              <input type="text" value={todo} onChange={this.handleChange} className="App-input"/>
            </label>
            <input type="submit" className="App-submit" onClick={this.handleSubmit}/>
          </form>
        </body>
      </div>
    );
  }
}

export default App;
