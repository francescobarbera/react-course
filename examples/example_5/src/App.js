import React, { useState } from "react";

import Button from "./components/button";
import "./App.css";

function App() {
  const [buttonHasBeenClicked, setButtonHasBeenClicked] = useState(false);

  return (
    <div className="App">
      {!buttonHasBeenClicked ? (
        <Button name="click me" onClick={() => setButtonHasBeenClicked(true)}>
          >
        </Button>
      ) : (
        <span>{"You have successfully clicked"}</span>
      )}
    </div>
  );
}

export default App;
