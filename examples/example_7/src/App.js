import React from "react";
import { createStore } from "redux";

import TodoList from "./components/todoList";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import "./App.css";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList></TodoList>
      </div>
    </Provider>
  );
}

export default App;
