import React, {Component} from 'react';
import Header from "../organisms/Header";
import Card from "../molecules/Card";
import HomePage from "../templates/HomePage";

class FormsAndInputs extends Component {
  constructor(props){
      super(props)
      this.state = {
          status: null
          

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
    const {status} = this.state
    return (
      <div className="result-page">
          <h1>Here is the details of your package:  </h1>
    <h2>{this.props.test1}</h2>
          <form onSubmit={this.handleSubmit}>
              <input type='text' placeholder='status' name='status' value={this.props.information[0].status }onChange = {this.handleInputChange} />
              <input type='text' required pattern='[a-zA-Z0-9]+' placeholder='eta' name='eta' value={this.props.information[0].eta} onChange = {this.handleInputChange} />
              <input type='number' placeholder='parcel_id' name='parcel_id' value={this.props.information[0].parcel_id } onChange = {this.handleInputChange} />
              <input type='text' placeholder='sender' name='sender' value={this.props.information[0].sender } onChange = {this.handleInputChange} />
              
          </form>
      </div>
    ) 
   }

}

export default FormsAndInputs





