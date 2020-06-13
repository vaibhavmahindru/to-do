import React from "react";
import "./App.css";
import Todoitem from "./todoitem";
import Tododata from "./tododata";

class App extends React.Component {
  state = {
    todo: Tododata,
  };

  handleChange = (id) => {
    /*this.setState((prevState) => {
      const updatedTodos = prevState.todo.map((todo) => {
        //if (todo.id === id) {
          console.log(todo.id)
          //todo.completed = !todo.completed;
        }
       /* return todo;
      });
      return {
        todo: updatedTodos,
        
      };
    });*/
    this.setState(() => {
      const update = this.state.todo.map((todo) => {
        if (todo.id === id) {
          console.log("changed ", id);

          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todo: update,
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
