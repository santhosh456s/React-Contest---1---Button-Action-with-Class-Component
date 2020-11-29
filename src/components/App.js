import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    paragraph: "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
  }

  render() {
    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        <button
          id="click"
          onClick={() => this.srtState({ paragraph: this.state.paragraph })}
        >
          click
        </button>
        <p id="para">{this.state.paragraph}</p>
      </div>
    );
  }
}

export default App;
