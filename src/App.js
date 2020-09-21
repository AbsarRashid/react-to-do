import React, { Component } from "react";
import Todos from "./Components/Todos";
import AddForm from "./Components/AddForm";

class App extends Component {
  state = {
    todos: [],
  };
  addTodo = (todo) => {
    console.log(todo);
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
  };
  deleteTodo = (id) => {
    console.log(id);
    let todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text"> Todo's</h1>
        <AddForm addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
