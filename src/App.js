// import logo from './logo.svg';
// import './App.css';

// import React, { Component } from "react"; //ReactがComponentとしても認識される。 「reactオブジェクト」全体を持ってきているし、Componentオブジェクト単体も持ってきている。

// // ↓JSXを使う場合
// function App() {
//   console.log('Reactの中身');
//   console.log(React);
//   console.log('Componentの中身');
//   console.dir(Component);

//   const tasks = [
//     { id: 1, title: "one" },
//     { id: 2, title: "two" },
//     { id: 3, title: "three" },
//     { id: 4, title: "four" },
//     { id: 5, title: "five" },
//   ];
//   const num1 = tasks.map((val, index) => {
//     return <div key={index}>IDは{val.id}、TITLEは{val.title}、INDEX:{index}、<button onClick={() => { theClick(val.id) }}>button</button></div>
//   });

//   const num2 = tasks.filter((val) => { return val.id > 2 }
//   ).map((val, index) => {
//     return <div key={index}>IDは{val.id}、TITLEは{val.title}</div>
//   });

//   console.log(num1);
//   console.log(num2);

//   //   // indexOfは、引数に入っている値が何番目かを返す → filter

//   const array10 = [1, 2, 3, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7]
//   const result10 = array10.filter((num, index, self) => {
//     return self.indexOf(num) === index
//   })
//   console.log(result10)


//   let torf = false;
//   function Hoge() {
//     if (torf) {
//       return <span>Hoge関数true</span>
//     } else {
//       return <span>Hoge関数false</span>
//     }
//   }

//   let moji = '文字です';

//   const myClick = (hikisu) => {
//     alert(`${hikisu}です`);
//   };

//   const theClick = (id) => {
//     console.log(id);
//   };

//   return (
//     <div className="App">
//       <div>{num1}</div>
//       <hr></hr>
//       <div>{num2}</div>
//       <hr></hr>
//       <div>
//         {/* 即時関数 */}
//         {
//           (() => {
//             if (torf) {
//               return <div>trueだよ！</div>
//             } else {
//               return <div>falseです</div>
//             }
//           })()}

//         {/* &&条件を使う */}
//         {torf && <div>trueです！</div>}

//         {/* 三項演算子 */}
//         {torf ? <div>三項演算子のtrue</div> : <div>こっちはfalse</div>}

//         {/* 関数 */}
//         <Hoge />

//         <button onClick={() => { console.log('ボタン1号です') }}>ボタン1号</button>
//         <button onDoubleClick={() => myClick(moji)}>ボタン2号</button>

//         <form>
//           <input type="text" onChange={() => { myChange() }} value={value} />
//           <button onClick={() => console.log(value)}>button</button>
//         </form>
//       </div>
//     </div >
//   );
// }


// JSXを使わない場合
// function App() {
//   const hoge = "こんちは！";

//   return (
//     React.createElement("div", null, "hello")
//   );
// }

// export default App;


// class App extends Component {
//   renderWithCondition(torf) {
//     if (torf) {
//       return <span>ClassのTrueです！</span>
//     } else {
//       return <span>ClassのFalseです！</span>
//     }
//   }

//   render() {

//     let torf = false;
//     return (
//       <div className="App">
//         {this.renderWithCondition(torf)}
//       </div>
//     );
//   }
// }

// export default App;



// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from "react";

// const tasks = [
//   { id: 1, title: "one" },
//   { id: 2, title: "two" },
//   { id: 3, title: "three" },
//   { id: 4, title: "four" },
//   { id: 5, title: "five" },
// ];


// function App() {
//   const num = tasks.map((val, index) => {
//     return <div key={index}>IDは{val.id}、TITLEは{val.title}、INDEX:{index}、<button onClick={() => { oneClick(val.id) }}>button</button></div>
//   });

//   const oneClick = (id) => {
//     console.log(id);
//   }

//   return (
//     <div className="App">
//       <div>{num}</div>
//     </div>
//   );
// }

// export default App;


import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";

function App() {

  return (
    <div className="App">
      <form>
        <input type="text" name="name" id="name1" />
        <button type="button" onClick={(e) => console.log(e.target.previousElementSibling.value)}>
          button</button>
      </form>
    </div>
  );
}

export default App;

// onChange={(e) => myChange(e.target.value)} value={moji}