import React, { Component } from "react";
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // クラスでは、コンストラクタ内で、this.stateの初期値をセット
      count: 0
    }
  }
  render() {
    return (<React.Fragment>
      <p>現在の数字は {this.state.count} です</p>
      {/*ボタンをクリックした時に、this.setState()を呼ぶことでcountステート を更新 */}
      <button onClick={() => this.setState({ count: this.state.count + 1 })}> +1
</button>
      <button onClick={() => this.setState({ count: this.state.count - 1 })}>
        -1
</button>
      <button onClick={() => this.setState({ count: 0 })}>0</button>
    </React.Fragment>)
  }
}
export default App;