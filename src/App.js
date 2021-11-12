import React from "react";
import './App.css';
import Header from "./Header";
import ChristmasTree from "./ChristmasTree";
import ColorPicker from "./ColorPicker";
import Buttons from "./Buttons";


function App() {
  return (
    <div className="app"> 
      <Header />
      <Buttons/>
      <ColorPicker/>
      <ChristmasTree />

    </div>
  ); 
}

export default App;
