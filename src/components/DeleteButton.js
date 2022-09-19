import React from 'react'
import { FiTrash } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

function DeleteButton({id, onDelete}) {
  const navigate = useNavigate();
  return (
      <button className='action' type='button' onClick={() => {
        onDelete(id)
        navigate('/')
        }}>
        <FiTrash />
      </button>
  )
}

export default DeleteButton