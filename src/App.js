import React from 'react';
import './App.css';
import Home from './Components/Home';
import SinglePage from './Components/SinglePage';
import DoublePage from './Components/DoublePage';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path = "/" component={Home}/>
        <Route path = "/SinglePage" component={SinglePage}/>
        <Route path = "/DoublePage" component={DoublePage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
