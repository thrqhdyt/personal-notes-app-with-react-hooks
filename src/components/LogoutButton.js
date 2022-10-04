import React from 'react'
import { MdOutlineInput } from 'react-icons/md';
import PropTypes from 'prop-types'

function LogoutButton({ logout, name }) {
  return (
    <button onClick={logout} className='button-logout'><MdOutlineInput />{name}</button>
  )
}

LogoutButton.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default LogoutButton