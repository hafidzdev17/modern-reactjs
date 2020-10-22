import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello'
import Article from './Article'

function App () {
  return (
    <div className="App">
      <Article userLogin='sudah login' />
    </div>
  );
}

export default App;
