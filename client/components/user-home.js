import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
// import puppy from 'client/components/puppy.png'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div>
      <h1>Home page</h1>
      {/* <h3>Welcome, {email}</h3> */}
      {/* <img src={puppy} /> */}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
