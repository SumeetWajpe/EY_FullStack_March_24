import React from "react";

class Counter extends React.Component {
  state = { count: 10 };
  render() {
    return (
      <>
        <p>{this.state.count}</p>
        <button onClick={this.setState({ count: this.state.count + 1 })}>
          ++
        </button>
      </>
    );
  }
}

export default Counter;
