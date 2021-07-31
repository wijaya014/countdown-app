import React, { Component } from "react";
import "./App.css";
import Clock from "./Clock";
class App extends Component {
  state = { deadLine: Date.now(), newDeadLine: "" };

  handleSubmit() {
    this.setState({
      deadLine: this.state.newDeadLine,
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.deadLine !== "" ? (
          <div className="App-title">{this.state.deadLine}</div>
        ) : (
          <p>tidak boleh kosong</p>
        )}
        <Clock deadLine={this.state.deadLine} />
        <div className="content-2">
          <input
            className="input"
            type="text"
            placeholder="input here"
            onChange={(event) =>
              this.setState({ newDeadLine: event.target.value })
            }
            name="date"
          />{" "}
          <button onClick={() => this.handleSubmit()}>submit</button>
        </div>
      </div>
    );
  }
}

export default App;
