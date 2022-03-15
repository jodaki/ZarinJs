
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className='nav-link' to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className='nav-link' to="/Users">Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/login">Login</Link></li>
                        <li className="nav-item">
                        <Link className='nav-link' href='/regster' to="/regster">Regster</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

      </div>
    )
  }
}