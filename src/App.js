import React from 'react';
import './App.css';
import factions from './Factions'
import standings from './Standings'

function App() {
  let results = standings(factions);
  let printStandings = results.map((item, i )=> <p className="standings" key={i}>Zmiana pomiędzy {item.a} a {item.b} o {item.value} </p>)
  return (
    <div className="App">
      <h1>DEMO</h1>
      {printStandings}
    </div>
  );
}

export default App;

