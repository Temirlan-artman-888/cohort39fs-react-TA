import { useState } from "react";
import "./styles.css";

 const Buttons = () => {

  const [counter, setCounter] = useState(0);

  const handleClick01 = () => {
    setCounter(counter + 1);
  };

  const handleClick02 = () => {
    setCounter (counter - 1);
  }

  const handleReset =() => {
    setCounter(0);
  };

  return (
    <div className= "button-container">
      <div className="counter-display"> {counter}</div>
      <button class="like-button" onClick={handleClick01}>Палец вверх</button>
      <button class="dislike-button" onClick={handleClick02}>Палец вниз</button>
      <button class="reset-button" onClick={handleReset}>Reset result</button>
    </div>
  );
}

export default Buttons;


