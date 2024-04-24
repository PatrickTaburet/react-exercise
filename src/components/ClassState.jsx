import React, { Component } from 'react'

export class ClassState extends Component {

    constructor (props){
        super(props)

        this.state= {
            counter : 0
        }
    }
    addOne = () => {
        this.setState(prevState => {return {counter : prevState.counter +1}} )
    }

  render() {
    return (
      <div>
        <p className='h3 m-4'>Class state: {this.state.counter}</p>
        <button className="btn btn-primary" onClick={this.addOne}>Increment</button>
      </div>
    )
  }
}

export default ClassState