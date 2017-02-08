import React, { Component } from 'react'
import { Link } from 'react-router'
import './Store.css'
import axios from 'axios'


class Store extends Component {
  constructor(props){
    super(props)

    this.state = {
      products: []
    }

  }
  componentDidMount(){
    axios.get('https://practiceapi.devmountain.com/products')
    .then(res => {
      this.setState({
        products: res.data
      })
    })
  }

  render(){
    let products = this.state.products.map((product, i) => {
      return (
        <Link key={i} to={`products/${product.id}`}>
          <li >{product.title}</li>
        </Link>
      )
    })

    return (
      <div>
      <div className="store-shell">
        <h1>Welcome to the store, bud!</h1>
        <ul>
          { products }
        </ul>

      </div>


    </div>
    )
  }
}

export default Store
