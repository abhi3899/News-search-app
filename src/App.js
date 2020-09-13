import React from 'react';
import './App.css';
import News from  './Components/News'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Today from './Components/Today/Today'
import Search from './Components/Search/Search'


function App() {
  return (
    <div className="app">
      <Router>
      
      <Switch >
      <Route path="/query">
          <Search />
      </Route>
      <Route path="/today">
          <Today />
      </Route>
     
        <Route path="/">
        
         
            <News />
            
        </Route>
        </Switch>
      </Router>
    
  
    </div>
  );
}

export default App;
