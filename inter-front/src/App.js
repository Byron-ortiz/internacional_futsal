import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './pages/Home';
import PlayerList from './pages/PlayerList';



function App() {
  return(
    <Router>
      <Routes>
      <Route exact path='/' element={<PlayerList/>} />
      </Routes>
    </Router>
  );
}

export default App;
