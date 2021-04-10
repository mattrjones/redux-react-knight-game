import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios'

import './App.css';
import KnightsList from './components/KnightsList';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Adventure from './components/Adventure'

function App() {

  const [knightsList, setKnightsList] = useState([])
  useEffect(() => {
    axios.get('/api/v1/knights')
        .then(res => setKnightsList(res.data))
  }, []);

  return ( 
      <div className="App">

        <Router>

          <NavBar />

          <Route exact path="/" component={Welcome}/>

          <Route exact path="/knights" component={KnightsList}/>

          <Route exact path="/knights/:id/adventure" render={routerProps => <Adventure knights={knightsList} {...routerProps}/>}/>

        </Router>

      </div>
  );
}

export default App;