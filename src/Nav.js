import React, { Component } from 'react'
import './Nav.css'
import { Link } from 'react-router'

class Nav extends Component {
  render () {
    return (
      <div className="app-shell">
      <div className="navbar">
        <Link to='/'>Home</Link>
        <Link to='Store'>Store</Link>
      </div>
        {this.props.children}
      </div>
    )
  }
}

export default Nav
