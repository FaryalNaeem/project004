import React from 'react';
import './App.css';
import hello from './hello';

function App({name, age}) {
  return <div>
      Hello world from Pakistan again {name} {age}
      <br/>
      <hello Firstname={name}></hello>
    </div>
}
export default App;
