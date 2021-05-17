import logo from './logo.svg';
import './App.css';

// ↓JSXを使う場合
function App() {
  const hoge = <strong>"こんちは！"</strong>;

  return (
    <div className="App">
      <h1 class="red">{hoge}</h1>
    </div>
  );
}


// JSXを使わない場合
// import React from "react";
// function App() {
//   const hoge = "こんちは！";

//   return (
//     React.createElement("div", null, "hello")
//   );
// }

export default App;
