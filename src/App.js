import React from 'react';

import './App.css';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div >
        <Menu />

       <Switch>
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        </Switch>
    </div>
    </BrowserRouter>
  );
}
const Home = () =>{
  return(
      <div className="Contactstyle">
          <h2>Welcome to home page</h2>
      </div>
  )
}
export default App;
