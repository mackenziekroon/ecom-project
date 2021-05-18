import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    {/* <h1>BOILERMAKER</h1> */}
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}

          <Link to="/account">Account</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div className="navbar-container">
          {/* The navbar will show these links before you log in */}
          <div>
            <Link to="/home">Name of shop</Link>
            <Link className="nav-links" to="/home">
              Shop All
            </Link>
            <Link className="nav-links" to="/home">
              Bestsellers
            </Link>
            <Link className="nav-links" to="/home">
              New Arrivals
            </Link>
            <Link to="/login">Log In</Link>
            {/* <Link to="/signup">Sign Up</Link> */}
          </div>
        </div>
      )}
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
