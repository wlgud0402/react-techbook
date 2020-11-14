import React, { useState } from "react";
import Counter from "./components/Counter";
import Info from "./components/Info";
import Counter2 from "./components/Counter2";
import Info2 from "./components/Info2";
import Average from "./components/Average";
import Average3 from "./components/Average3";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Average3></Average3>
      <Counter2></Counter2>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info2></Info2>}
    </div>
  );
};

export default App;
