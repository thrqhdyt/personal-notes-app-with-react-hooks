import React from 'react'
import PropTypes from 'prop-types';
import { BiArchiveOut } from "react-icons/bi";

function UnArchivedButton({ id, unArchived}) {
  return (
    <button className='action' type='button' title='pindahkan' onClick={() => {
      unArchived(id)
      }}>
      <BiArchiveOut />
    </button>
  )
}

UnArchivedButton.propTypes = {
  id: PropTypes.string.isRequired,
  unArchived: PropTypes.func.isRequired
}

export default UnArchivedButton