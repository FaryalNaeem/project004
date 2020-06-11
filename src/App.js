import React from 'react';
import './App.css';
import Hello from './Hello';

Function App({name, age}) {
  return <div>
      Hello world from Pakistan again {name} {age}
      <br/>
      <Hello Firstname = {name}></Hello>
    </div>
}
export default App;
