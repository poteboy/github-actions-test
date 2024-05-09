import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Box, k } from "@kuma-ui/core";

function App() {
  const [count, setCount] = useState(0);

  return (
    <k.div color="red" bg="white">
      hello
      <k.div color="blue" fontSize={24}>
        world
      </k.div>
    </k.div>
  );
}

export default App;
