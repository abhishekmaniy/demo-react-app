import React, { Component } from 'react'

export class CountClass extends Component {
  constructor () {
    super();
    this.state ={
        count:0
    }
  }

  inc = () => {
    this.setState({ count: this.state.count + 10 })
  }

  dec = () => {
    this.setState({ count: this.state.count - 10 })
  }

  render () {
    return (
      <div>
        <h2>Counter Value: {this.state.count}</h2>
        <button onClick={() => this.inc()}>Add By 10</button>
        <button onClick={() => this.dec()}>Subtract By 10</button>
      </div>
    )
  }
}

export default CountClass
