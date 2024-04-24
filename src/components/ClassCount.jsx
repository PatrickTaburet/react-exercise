import React, { Component } from 'react'

export class ClassCount extends Component {

    componentDidMount(){
        document.title = `Vous avez cliqué ${this.state.count} fois` 
        console.log("Component Mount Class");
    }
    // componentDidUpdate(prevProps, prevState){
    //   if(this.state.count !== prevState.count){
    //     document.title = `Vous avez cliqué ${this.state.count} fois` 
    //     console.log("mise a jour du titre");
    //   }
    // }
    constructor(props) {
        super(props)
        this.state = {
            count : 0,
            name : ""
        }
    }
    handleCount = () => {
        this.setState({count : this.state.count +1})
    }
    handleChange = e => {
        this.setState({name : e.target.value})
    }
  render() {
    
    return (
      <div>
        <h1 className='m-3'>Class counter : {this.state.count}</h1>       
        <button className="btn btn-primary"onClick={()=>this.handleCount()}>Click Here</button>
   
        <p className='m-3'>Name : {this.state.name} </p> 
        <input className=" m-2" type="text" onChange={this.handleChange}/>
        <hr />
      </div>
    )
  }
}

export default ClassCount