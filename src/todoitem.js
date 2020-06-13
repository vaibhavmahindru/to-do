import React, { Component } from "react";

class todoitem extends Component {
  changedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
  };
  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.props.item.completed}
          onChange={() => this.props.handleChange({ id: this.props.item.id })}
        />
        <p style={this.props.item.completed ? this.changedStyle : null}>
          {this.props.item.text}
        </p>
      </div>
    );
  }
}

export default todoitem;
