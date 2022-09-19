import React from 'react'
import { useNavigate } from 'react-router-dom'
import NoteInput from '../components/NoteInput'
import { addNote } from '../utils/local-data'

function AddPage() {
  const navigate = useNavigate();

  function onAddNoteHandler({ title, body }){
    addNote({ title, body });
    navigate('/');
  }


  return (
    <section>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  )
}

export default AddPage;