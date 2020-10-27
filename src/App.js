import React from 'react';
import './App.css';
import Article from './Article'
import Conditional from './Conditional'
import List from './ListRendering'
import BlueButton from './Event/BlueButton'


function App () {
  function info () {
    alert("halo bro")
  }
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
      <hr />
      <h1>Event</h1>
      <BlueButton onCustomClick={info} caption="tampilkan info" />
    </div>
  );
}

export default App;
