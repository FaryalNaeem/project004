import React from 'react';
import './App.css';
import hello from './hello';

function App({name, age}) {
  return <div>
      Hello world from Pakistan again {name} {age}
      <br/>
      <Hello Firstname = {name}></Hello>
    </div>
}
export default App;
