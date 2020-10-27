import React from 'react';
import './App.css';
import Article from './Article'
import Conditional from './Conditional'
import List from './ListRendering'


function App () {
  return (
    <div className="App">
      <hr />
      <h1>Parent & Child Component</h1>
      <Article userLogin='sudah login' />
      <hr />
      <h1>Conditional Rendering</h1>
      <Conditional username="hafidz" />
      <hr />
      <h1>List Rendering</h1>
      <List />
      {/* <Rendering /> */}
    </div>
  );
}

export default App;
