import React from 'react';
import './App.css';
import hello from "./hello.js";
const Hi= (name)=> "Hello World" +name;
function Hi(name){
    return "Hello world" +name;
}

function App({name,age}) {
  return (
    <div>
      Hello world from Pakistan again {name} Age ={age-2}
      <hello></hello>
    </div>
  );
}

export default App;
