import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Swapi from './components/swapi/Swapi';
import Meals from './components/meals/Meals';

function App() {

    const Home = () => (
        <div>
            <h2>API 1</h2>
            <span>
                In this API, select the planet of Star Wars Galaxy whose characteristics you would like to know
            </span>
            <br/>
            <br/>
            <h2>API 2</h2>
            <span>
                This API lists a set of photos of dishes from around the world!
            </span>


        </div>
    )

  return (
      <Router>
    <div className="App">
        <Navbar />
        <div className="container">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/swapi" component={Swapi} />
                <Route path="/meals" exact component={Meals} />
            </Switch>
        </div>

    </div>
      </Router>
  );


}

export default App;
