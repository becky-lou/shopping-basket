import React, { Component } from "react";

class Counter extends Component {
  // Note: invoked immediately after updating occurs
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    // below is an example of where you can make a ajax request if there is change i.e
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from server
    }
  }

  componentWillUnmount() {
    // Note: is invoked immediately before a component is unmounted and destroyed
  }

  render() {
    return (
      <div>
        <h4>Item id:{this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
