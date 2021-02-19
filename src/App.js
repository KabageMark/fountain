import React from 'react';
import './App.css';
import Events from './Events';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Sermon from './Sermon';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import About from './About';


function App() {

  return (
    <Router>
      
    <div className="app">
        
      <Switch>
      
      <Route path='/About'>
          <Header/> 
          <About/>
          < Footer/>
      </Route>

      <Route path='/'>   
          < Header/>
          < Home/>
          < Events/>
          < Footer/>
      </Route>

        </Switch>
        

    </div>
    </Router>
  );
}

export default App;
