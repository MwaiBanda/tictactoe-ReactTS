import React from 'react';
import './App.css';
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
        <div className="App-body">
            <h1>Tic-tac-toe</h1>
            <Board />
        </div>
    </div>
  );
}

export default App;
