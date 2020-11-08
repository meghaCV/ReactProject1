import React, {Component} from 'react';
import { Link } from "react-router-dom";

class FormsAndInputs extends Component {
  constructor(props){
      super(props)
      this.state = {
          Tid: null
      }
  }

  handleSubmit = (event) => {
       event.preventDefault()
       const data = this.state
       console.log(data)
  }

  handleInputChange = (event) => {
       event.preventDefault()
       this.setState({
           [event.target.name]: event.target.value

       })
  }

  render () {
    const {Tid} = this.state
    return (
      <div>
          <h1>Enter Tracking id: </h1>
          <form onSubmit={this.handleSubmit}>
              <input type='number' placeholder='Tracking id' name='Tid' onChange = {this.handleInputChange} />
             
              {/* <Link to={`video/${id}`}></Link> */}
          </form>
      </div>
    ) 
   }

}

export default FormsAndInputs





