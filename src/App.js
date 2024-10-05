import React, { useState, useEffect } from "react";
import "./assets/css/_reset.css";
import "./assets/css/fonts.css";
import "./assets/css/style.css";

import EnterScreen from "./components/EnterScreen";
import saunaLaura from "./assets/media/sauna-laura.mp3";
import gert from "./assets/media/gert.jpg";

function Feed() {
  return (
    <main className="feed">
      <img className="feed__img" src={gert}></img>
    </main>
  );
}

function App() {
  const [isHidden, setIsHidden] = useState(false);

  const audioElement = new Audio(saunaLaura);

  function handleClick() {
    if (!isHidden) {
      console.log("click");
      audioElement.play();

      setIsHidden((prevState) => !prevState);
    }
  }

  return (
    <div onClick={handleClick} className="app">
      {isHidden ? <Feed /> : <EnterScreen />}
    </div>
  );
}

export default App;
