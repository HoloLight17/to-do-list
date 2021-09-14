import './App.css';
import React from 'react';
import {uuid} from 'uuidv4';

class App
    extends React.Component {
    constructor(props) {
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

        if (this.state.todo !== "") {
            this.setState({
                todo: "",
                todos: [...this.state.todos, {id: uuid(), name: this.state.todo}]
            });
        }
    }

    render() {
        const {todos, todo} = this.state
        return (
            <div className="container-fluid pt-2">
                <html>
                <head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <title>to-do-list</title>
                    <link
                        rel="stylesheet"
                        href="./css/bootstrap.css"
                    />
                </head>
                <header className="d-flex">
                    <h1 className="text-body">To-Do</h1>
                </header>
                <body className="App-body d-flex flex-column align-items-center h-100 bg-dark py-5">
                <form className="d-flex flex-row align-content-start">
                    <label className="App-label form-label h3 text-white">
                        New task:
                        <input type="text" value={todo} onChange={this.handleChange} className="form-control mt-auto"/>
                    </label>
                    <input type="submit" className="btn-outline-dark" onClick={this.handleSubmit}/>
                </form>
                <ul className="d-flex flex-column flex-wrap w-25">
                    {todos.map(
                        todo => (
                            <li key={todo.id} className="App-list list-group-item btn-group-vertical">
                                <input type="checkbox"
                                       className="d-inline"
                                       id={todo.id}
                                />
                                <label className="check--text d-inline ps-3" for={todo.id}>{todo.name}</label>
                            </li>
                        )
                    )
                    }
                </ul>
                <script src="js/bootstrap.js"/>
                </body>
                </html>
            </div>
        )

    }
}

export default App;
