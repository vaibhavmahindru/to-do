import React from "react";
import "./App.css";
import Todoitem from "./todoitem.js";
import Tododata from "./tododata";

class App extends React.Component {
  state = {
    todo: Tododata,
  };

  handleChange = (id) => {
    this.setState((prevState) => {
      const updatedTodos = prevState.todo.map((todo) => {
        if (todo.id === id) {
          let check = !todo.completed;
          todo.completed = check;
        }
        return todo;
      });

      return {
        todo: updatedTodos,
      };
    });
  };

  render() {
    const todoitems = this.state.todo.map((item) => (
      <Todoitem key={item.id} item={item} handleChange={this.handleChange} />
    ));
    return <div className="todo-list">{todoitems}</div>;
  }
}

export default App;
