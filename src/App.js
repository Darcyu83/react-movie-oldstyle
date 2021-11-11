import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };

  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  render() {
    console.log("render");
    return (
      <div>
        <h1>The number is {this.state.count}</h1>

        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
export default App;
