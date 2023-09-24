import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

export default function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [DarkMode, setDarkMode] = useState(false);

  const appClass = DarkMode ? "App dark" : "App light";

  const handleClick = () => {setDarkMode(!DarkMode);};


  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

//const [ligth , setligth] = useState ('true')
  //const handleClick =() => {setligth (ligth='false')};
  