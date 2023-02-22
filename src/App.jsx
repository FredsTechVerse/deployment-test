import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>This is my react application ready for hosting.</p>
      <p>I have added this line to test continuos deployment.</p>
    </div>
  );
}

export default App;
