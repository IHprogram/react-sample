// 関数コンポーネントのuseEffect

import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux';

import { countPlus, countMinus } from '../actions'; // ActionsCreatorであるcountPlus、countMiusを読み込み

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom';

import About from './about';
import Users from './users';
import { Topics } from './topics';
import Navi from './navi';


// クラスコンポーネントは以下の通り
const App = (hoge) => {
  console.log('クラスコンポは以下の通り');
  console.log(hoge);
  const props = hoge
  const index = 11;
  console.log(props); // thisにはAppクラスの中身が入っている
  return (
    <React.Fragment>
      <Router>
        <div>

          <Navi />

          {/* ナビをhistoryオブジェクトで実装したためコメントアウト */}
          {/* <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about/100">About</Link>
                </li>
                <li>
                  <Link to="/id/777">ID</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
                <li>
                  <Link to="/mypagea">mypage</Link>
                </li>
              </ul>
            </nav> */}

          <Switch>
            <Route path={['/users']} exact component={Users} />
            <Route path={['/about/:aboutId', '/mypage']} exact component={About} />
            <Route path={['/id/:id']} exact><Id /></Route>
            <Route path='/topics' component={Topics} />
            <Route path={['/']} exact>
              <Home val={props.val} countPlus={props.countPlus} countMinus={props.countMinus} />
            </Route>
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  )
}

const Home = (props) => {
  return (
    <React.Fragment>
      <h2>Home</h2>
      <p>現在の数字は{props.val}です</p>
      <button onClick={props.countPlus}>+1</button>
      <button onClick={props.countMinus}>-1</button>
    </React.Fragment>
  )
}

const Id = () => {
  console.dir(useParams)
  const { id } = useParams();
  console.log('useParamsです');
  console.dir(useParams);
  return <h2>Id: {id}</h2>
}

const Error = () => {
  return <h2>エラーです</h2>;
}


// 関数コンポーネントなら以下の通り(propsを使わないといけない？)
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