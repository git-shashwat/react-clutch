import React from "react";
import "./App.css";
import FeatureTray from "./components/FeatureTray/FeatureTray";
import Header from "./components/Header/Header";
import ProductTray from "./components/ProductTray/ProductTray";
import SloganMaker from "./components/SloganMaker/SloganMaker";

function App() {
  return (
    <div className='App'>
      <Header />
      <SloganMaker />
      <FeatureTray />
      <ProductTray />
    </div>
  );
}

export default App;
