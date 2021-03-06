import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paragraph:
        "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    };
  }

  render() {
    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        <button
          id="click"
          onClick={() => this.setState({ paragraph: this.state.paragraph })}
        >
          Click
        </button>
        <paragraph id="para">{this.state.paragraph}</paragraph>
      </div>
    );
  }
}

export default App;
