import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Nav } from './components/1-nav/Nav';
import { Header } from './components/2-header/Header';
import { FrontEnd } from './components/3-frontend/Frontend';
import { Html } from './components/3.1-html/html';
import { Css } from './components/3.2-css/Css';
import { Javascript } from './components/3.3-javascript/Javascript';
import { Reactjs } from './components/3.4-reactjs/Reactjs';
import { Backend } from './components/4-backend/Backend';
import { Nodejs } from './components/4.1-nodejs/Nodejs';
import { Postgresql } from './components/4.2-postgresql/Postgresql';
import { Mongodb } from './components/4.3-mongodb/Mongodb';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Nav/>
      <Header/>
      <FrontEnd/>
      <Html/>
      <Css/>
      <Javascript/>
      <Reactjs/>
      <Backend/>
      <Nodejs/>
      <Postgresql/>
      <Mongodb/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
