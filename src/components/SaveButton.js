import React from 'react'
import { FiCheck } from "react-icons/fi";

function SaveButton() {
  return (
    <div className='add-new-page__action'>
      <button className='action' type='submit' title='simpan'><FiCheck /></button>
    </div>
  )
}

export default SaveButton