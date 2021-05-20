import React, { Component, useState } from "react";

// const Child = () => {
//   const val = "";
//   const [moji, setMoji] = useState('文字です');
//   return (
//     <div>
//       <p>{moji}</p>
//       <input type="text" />
//       <button onClick={(e) => e.target.previousElementSibling.value = val}>送信</button>
//       <button onClick={() => console.log(val)}>確認</button>
//     </div>
//   )
// }

const App = () => {
  // count という名前の state 変数を宣言、初期値 0 をセット
  const [count, setCount] = useState(0)
  return (
    <div> <p>現在の数字は{count}です</p>
      {/* setCount()は、countを更新するための関数。countを引数で受け取ること も出来る */}
      <button onClick={() => setCount(prevState => prevState + 1)}> +1</button>
      <button onClick={() => setCount(count - 1)}>- 1</button> <button onClick={() => setCount(0)}>0</button>
      <button onClick={() => console.log(typeof setCount)}>useStateボタン</button>
      {/* <Child /> */}
    </div>)
}


export default App;