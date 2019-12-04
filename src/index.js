import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meteor: 20
    };
  }

  handleOnChange = e => {
    e.preventDefault();
    const meteor = Number(e.target.value);
    this.setState({ meteor });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.meteor}</h1>
        <input
          type="range"
          onChange={e => {
            this.handleOnChange(e);
          }}
          value={this.state.meteor}
          min="0"
          max="100"
          step="20"
        />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
