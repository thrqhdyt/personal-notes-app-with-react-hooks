import React from 'react'
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BiArchiveOut } from "react-icons/bi";

function UnArchivedButton({ id, unArchived}) {
  const navigate = useNavigate();
  return (
    <button className='action' type='button' title='pindahkan' onClick={() => {
      unArchived(id) 
      navigate('/')
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