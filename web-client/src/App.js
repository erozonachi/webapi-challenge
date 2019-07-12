import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const BASE_URL = `http://localhost:5000/api/projects`;
  const [ store, setStore ] = useState({ projects: [] });
  const fetchProjects = () => {
    axios.get(BASE_URL)
    .then(data => {
      setStore({
        ...store, 
        projects: data
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  useEffect(() => {
    fetchProjects()
  }, [ store ]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
