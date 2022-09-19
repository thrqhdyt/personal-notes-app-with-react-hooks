import React from 'react'
import { BiArchiveIn } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function ArchivedButton({ id, onArchived}) {
  const navigate = useNavigate();
  return (
    <button className='action' type='button' title='arsip' onClick={() => {
      onArchived(id) 
      navigate('/')
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