import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./component/Header";
import Landing from "./component/Landing";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Landing} />
    </BrowserRouter>
  );
};

export default App;
