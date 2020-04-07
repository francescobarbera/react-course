import React, { useState } from "react";
import { connect } from "react-redux";

import { addTodo, toggleTodo } from "../../actions/todo";
import Todo from "../todo";
import "./styles.css";

function TodoList({ addTodo, toggleTodo, todos }) {
  const [input, setInput] = useState("");

  return (
    <div className="todo-list">
      <div className="input-box">
        <input
          className="todo-list-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button
          className="todo-list-button"
          onClick={() => {
            addTodo(input);
            setInput("");
          }}
        >
          {"aggiungi"}
        </button>
      </div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          onClick={toggleTodo}
        ></Todo>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
