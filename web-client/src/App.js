import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const BASE_URL = `http://localhost:5000/api/projects`;
  const [ store, setStore ] = useState({ projects: [] });
  const fetchProjects = () => {
    axios.get(BASE_URL)
    .then(res => {
      setStore({
        ...store, 
        projects: res.data
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  useEffect(() => {
    fetchProjects()
  }, []);

  return (
    <div>
      <h2>Project List</h2>
      <ul>
        {
          store.projects.length > 0?
            store.projects.map(project => (<li key={project.id}>{project.name}</li>)) :
            <span>No project found</span>
        }
      </ul>
    </div>
  );
}

export default App;
