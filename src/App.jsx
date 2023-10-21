import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Card } from "./Components/Card/Card.component";
import { Board } from "./Components/Card/Board/Board.component";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Card /> */}
      <Board />
    </>
  );
}

export default App;
