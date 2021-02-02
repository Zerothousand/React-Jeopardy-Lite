import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Clock from './Components/Clock/Clock';
import Contact from './Components/Contact/Contact';
import Welcome from './Components/Welcome/Welcome';
import Navigation from './Components/Navigation/Navigation'
import Jeopardy from "./Components/Jeopardy/Jeopardy"
import NotFound from "./Components/NotFound/NotFound"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" 
          exact 
          render= {(props) => <Welcome {...props} name='Alexander'/>} 
        />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route path="/welcome/:name" component={Welcome} />
        <Route path="/jeopardy" component={Jeopardy} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
