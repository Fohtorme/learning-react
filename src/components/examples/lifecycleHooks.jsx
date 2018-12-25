import React, { Component } from "react";

// Mount:
//  - constructor
//  - render
//  - componentDidMount
// Update:
//  - render
//  - componentDidUpdate
// Unmount
//  - componentWillUnmount
//
// OBS: There is others lifecycle hooks, but these three are the most importants ones

class LifecycleHooks extends Component {
  state = {
    counter: 6
  };

  consoleLog = text => {
    const { isChildren, childrenColor } = this.props;
    if (isChildren) {
      console.log(
        "%cLifecycleHookChildren",
        `color: ${childrenColor};  font-weight: bold;`,
        text
      );
    } else {
      console.log("%cLifecycleHook", "color: black;  font-weight: bold;", text);
    }
  };

  constructor(props) {
    super(props);
    // Used to initialize variables
    //  - Example: this.state.something = this.props.something;
    //  - To use props here it's necessary define props as a constructor argument
    //  - You can't call the method setState() here
    this.consoleLog("constructor()");
  }

  componentDidMount() {
    // Used to made http requests
    this.consoleLog("componentDidMount()");
  }

  componentDidUpdate(prevProps, prevState) {
    // Used to update http requests
    //  - Example: if(prevProps.user !== this.props.user) ...
    this.consoleLog("componentDidUpdate()");
  }

  componentWillUnmount() {
    // Clean up things here
    this.consoleLog("componentWillUnmount()");
  }

  deleteChildren = () => {
    //console.log(counter);
    this.setState({ counter: this.state.counter - 1 });
  };

  createChildren = code => {
    if (code > this.state.counter) {
      return "";
    }
    switch (code) {
      case 1:
        return (
          <React.Fragment>
            <br />
            <LifecycleHooks isChildren={true} childrenColor="red" />
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <br />
            <LifecycleHooks isChildren={true} childrenColor="green" />
          </React.Fragment>
        );
      case 3:
        return (
          <React.Fragment>
            <br />
            <LifecycleHooks isChildren={true} childrenColor="blue" />
          </React.Fragment>
        );
      case 4:
        return (
          <React.Fragment>
            <br />
            <LifecycleHooks isChildren={true} childrenColor="orange" />
          </React.Fragment>
        );
      case 5:
        return (
          <React.Fragment>
            <br />
            <LifecycleHooks isChildren={true} childrenColor="yellow" />
          </React.Fragment>
        );
      case 6:
        return (
          <React.Fragment>
            <br />
            <LifecycleHooks isChildren={true} childrenColor="pink" />
          </React.Fragment>
        );
      default:
        return "";
    }
  };

  render() {
    this.consoleLog("render()");
    const itemStyle = {
      fontSize: 24
    };
    if (this.props.isChildren) {
      return (
        <span className="badge badge-warning" style={itemStyle}>
          Children: {this.props.childrenColor}
        </span>
      );
    }
    let code = 0;
    return (
      <React.Fragment>
        <span className="badge badge-warning" style={itemStyle}>
          See the console log
        </span>
        {this.createChildren(++code)}
        {this.createChildren(++code)}
        {this.createChildren(++code)}
        {this.createChildren(++code)}
        {this.createChildren(++code)}
        {this.createChildren(++code)}
        <br />
        <button onClick={this.deleteChildren} className="btn btn-primary">
          Delete children
        </button>
      </React.Fragment>
    );
  }
}

export default LifecycleHooks;
