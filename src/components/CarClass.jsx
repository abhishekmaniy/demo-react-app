import React, { Component } from 'react'

export class CarClass extends Component {
  constructor () {
    super()
    this.arr = [
      {
        model: 'Mercedes s-class',
        color: 'black',
        menifecturer: 'Maniyar motors'
      },
      {
        model: 'Mercedes c-class',
        color: 'blue',
        menifecturer: 'Mani motors'
      },
      {
        model: 'Mercedes Benz',
        color: 'white',
        menifecturer: 'Maniyar Manifecture'
      },
      {
        model: 'Mercedes z-class',
        color: 'Green',
        menifecturer: 'Maniyar motodrive'
      }
    ]
    this.state = {
      detail: this.arr[0]
    }
  }

  change = () => {
    this.setState({
      detail: this.arr[Math.floor(Math.random() * 4)]
    })
  }

  render () {
    return (
      <div>
        <h1>
          Model:{this.state.detail.model}
          <br />
          Color:{this.state.detail.color}
          <br />
          Menifecture:{this.state.detail.menifecturer}
        </h1>
        <button onClick={() => this.change()}>Click</button>
      </div>
    )
  }
}

export default CarClass
