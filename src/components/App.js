// 関数コンポーネントのuseEffect

import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux';

import { countPlus, countMinus } from '../actions'; // ActionsCreatorであるcountPlus、countMiusを読み込み

// クラスコンポーネントは以下の通り
class App extends React.Component {
  render() {
    console.log('クラスコンポは以下の通り');
    console.log(this); // thisにはAppクラスの中身が入っている
    const props = this.props
    return (
      <React.Fragment>
        <p>現在の数字は{props.val}です</p>
        <button onClick={props.countPlus}>+1</button>
        <button onClick={props.countMinus}>-1</button>
      </React.Fragment>
    )
  }
}


// 関数コンポーネントなら以下の通り
// const App = (hoge) => {
//   const props = hoge;
//   return (
//     <React.Fragment>
//       <p>現在の数字は{props.val}です</p>
//       <button onClick={props.countPlus}>+1</button>
//       <button onClick={props.countMinus}>-1</button>
//     </React.Fragment>
//   )
// }


const mapStateToProps = state => ({
  val: state.counter.val
})

const mapDispatchToProps = dispatch => ({
  countPlus: () => dispatch(countPlus()),
  countMinus: () => dispatch(countMinus())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

// const App = () => {
//   const [count, setCount] = useState(0)
//   useEffect(() => {
//     console.log("変更されてます")
//   }, [count])

//   const kansu = () => {
//     setCount(0)
//     console.log("呼ばれてますよ")
//   }

//   return (
//     <>
//       <p>{`${count}回クリックされました`}</p>
//       <div >
//         <button onClick={() => setCount((prev) => prev + 1)}>
//           ボタン
//         </button>
//         <button onClick={kansu}>
//           リセット
//         </button>
//       </div>
//     </>
//   )
// }

// export default App