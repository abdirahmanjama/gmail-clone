import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>

      {/*/App Body*/}
    </div>
  );
}

export default App;
