import React from 'react'
import { Link } from 'react-router-dom';

function AddAction() {
  return (
    <div className='homepage__action'>
        <Link to='/new'>
          <button className='action' type='button' title='tambah'>+</button>
        </Link>
    </div>
  )
}


export default AddAction