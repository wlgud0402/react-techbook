import React, { useState } from "react";
import Counter from "./components/Counter";
import Info from "./components/Info";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Counter></Counter>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info></Info>}
    </div>
  );
};

export default App;