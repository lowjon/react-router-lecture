import React, { Component } from 'react'
import { Link } from 'react-router'
import './Detail.css'
import axios from 'axios'


class Detail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      product: {}
    }
  }

  componentDidMount(){
    axios.get(`https://practiceapi.devmounta.in/products/${this.props.params.id}`)
    .then(res => {
      this.setState({
        product: res.data
      })
    })
  }


  render(){
    return (
      <div className="detail">

        <img role="presentation" src={this.state.product.image} />
        <h1>{this.state.product.title}</h1>
        <p>Price: ${this.state.product.price}</p>
        <p>Description: {this.state.product.desc}</p>



      </div>
    )
  }
}

export default Detail
