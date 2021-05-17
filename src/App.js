import logo from './logo.svg';
import './App.css';

// ↓JSXを使う場合
function App() {
  const tasks = [
    { id: 1, title: "one" },
    { id: 2, title: "two" },
    { id: 3, title: "three" },
    { id: 4, title: "four" },
    { id: 5, title: "five" },
  ];
  const num1 = tasks.map((val, index) => {
    return <div key={index}>IDは{val.id}、TITLEは{val.title}</div>
  });

  const num2 = tasks.filter((val) => { return val.id > 2 }
  ).map((val, index) => {
    return <div key={index}>IDは{val.id}、TITLEは{val.title}</div>
  });

  console.log(num1);
  console.log(num2);

  // indexOfは、引数に入っている値が何番目かを返す → filter

  const array10 = [1, 2, 3, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7]
  const result10 = array10.filter((num, index, self) => {
    return self.indexOf(num) === index
  })
  console.log(result10)


  return (
    <div className="App">
      <div>{num1}</div>
      <hr></hr>
      <div>{num2}</div>
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
