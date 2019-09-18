import React, { Component } from "react";
import Plus from "./assets/PlusIcon";
import img from "./assets/autumn-goodman.jpg";
import "./App.css";

function Fab(props) {
  return (
    <button className="btn btn--fab" onClick={props.onClick}>
      <Plus/>
    </button>
  );
}

function Snackbar(props) {
  if (!props.snack) {
    return null;
  }
  return (
    <div className="snackbar">
      <p className="snackbar-msg">{props.message}</p>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showSnack: false };
    this.handleShowSnack = this.handleShowSnack.bind(this);
  }

  handleShowSnack() {
    this.setState(state => ({
      showSnack: true
    }));
    setTimeout(() => this.setState({ showSnack: false }), 4000);
  }

  render() {
    return (
      <div className="App">
        <div className="box">
          <img src={img} alt="Photography by Autumn Goodman on Unsplash." title="Mother Nature: Summer - Autumn Goodman." />
          <Fab onClick={this.handleShowSnack}/>
        </div>
        <div className="box section">
          <h1 className="h1">
            The Snackbar
            <span className="h1-span">UI Component built with React.</span>
          </h1>
          <p>
            Please click the fab button to display the snackbar. It will appear
            for 4 seconds and then disappear.
          </p>
          <p>Photo by Autumn Goodman on Unsplash</p>
        </div>
        <Snackbar snack={this.state.showSnack} message="Marked as favorite." />
      </div>
    );
  }
}

export default App;
