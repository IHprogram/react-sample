import logo from './logo.svg';
import './App.css';

import React, { Component } from "react"; //ReactがComponentとしても認識される。 「reactオブジェクト」全体を持ってきているし、Componentオブジェクト単体も持ってきている。

const Members = [
  { name: "taro", age: 12 },
  { name: "jiro", age: 13 },
  { name: "saburo", age: 14 },
];

const Func3 = () => {
  return <p>Func3です</p>
}

class Func2 extends Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={() => { console.dir(React.Component) }}>Func2です</button>
        <Func3 />
      </React.Fragment>
    )
  }
}

const Func1 = () => {
  return <div><h1>func1です</h1><Func2 /></div>
}

const App = () => {
  return (
    <React.Fragment>
      {
        Members.map((men, index) => {
          return <div key={index}><p>{men.name}</p><p>{men.age}</p></div>
        })
      }
      <Func1 />
    </React.Fragment>
  )
}


export default App;