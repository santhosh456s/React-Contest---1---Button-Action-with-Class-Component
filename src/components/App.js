import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    pa: "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
  }

  render() {
    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        <button id="click" onClick={() => this.srtState({ pa: this.state.pa })}>
          Click
        </button>
        <p id="para">{this.pa}</p>
      </div>
    );
  }
}

export default App;
