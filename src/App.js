import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail'
import EmailList from './EmailList'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>

        <div className="app__body">
          <Switch>
            <Route path = "/mail">
              <Mail/>
            </Route>
            <Route path ="/">
              <EmailList/>
            </Route>
          </Switch>
        </div>
        <Sidebar/>
      </Router>
     

 
    </div>
  );
}

export default App;
