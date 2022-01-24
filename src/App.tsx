import React from "react";
import "./App.css";
import FeatureTray from "./components/FeatureTray/FeatureTray";
import Header from "./components/Header/Header";
import SloganMaker from "./components/SloganMaker/SloganMaker";

function App() {
  return (
    <div className='App'>
      <Header />
      <SloganMaker />
      <FeatureTray />
    </div>
  );
}

export default App;
