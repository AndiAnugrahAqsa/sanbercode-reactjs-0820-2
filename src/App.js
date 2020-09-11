import React from 'react';
import logo from './logo.svg';
import './App.css';

import Routes from "./Tugas-15/routes"
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
