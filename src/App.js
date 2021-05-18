import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'

import React, { Component } from "react"; //ReactがComponentとしても認識される。 「reactオブジェクト」全体を持ってきているし、Componentオブジェクト単体も持ってきている。

const Members = [
  { name: "taro", age: 12 },
  { name: "jiro", age: 13 },
  { name: "saburo", age: 14 },
  { name: "shiro", age: 17 },
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

// 画面に表示するためのmapメソッド
const Func4 = () => {
  return Members.map((member, index) => {
    // keyはindexを指定
    return <Func5 name={member.name} age={member.age} key={index} />
  })
}

//メンバー一つ一つの表示が子コンポーネントになる。
const Func5 = (props) => {
  return <li>名前:{props.name} 年齢:{props.age}</li>
}

// Func5.defaultProps = {
//   age: 100
// }

// 「コンポーネント名.propTypes」は、最初のpを小文字にする。
Func5.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

const App = () => {
  return (
    <React.Fragment>
      {
        Members.map((men, index) => {
          return <div key={index} className="red"><p>{men.name}</p><p>{men.age}</p></div>
        })
      }
      <Func1 />

      <ul>
        <Func4 />
      </ul>
    </React.Fragment>
  )
}


export default App;