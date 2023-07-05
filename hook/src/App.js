import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from "./Component/Home"
import UseStatepage from "./Component/useState";
import TwowayBinding from "./Component/two-way_binding";
import ToDoList from "./Component/toDoList"
import Mounted from "./Component/Mounted"
// Components

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/useStatepage" element={<UseStatepage />}/>
        <Route path="/2wayBinding" element={<TwowayBinding />}/>
        <Route path="/toDoList" element={<ToDoList />}/>
        <Route path="/Mounted" element={<Mounted />}/>

      </Routes>
    </BrowserRouter>
  );
};

export default App;