import React from 'react'
import { BiArchiveIn } from "react-icons/bi";
import PropTypes from 'prop-types';

function ArchivedButton({ id, onArchived}) {
  return (
    <button className='action' type='button' title='arsip' onClick={() => {
      onArchived(id) 
      }}>
      <BiArchiveIn />
    </button>
  )
}

ArchivedButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchived: PropTypes.func.isRequired,
}

export default ArchivedButton