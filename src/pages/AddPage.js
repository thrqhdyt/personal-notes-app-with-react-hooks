import React from 'react'
import { useNavigate } from 'react-router-dom'
import NoteInput from '../components/NoteInput'
import { addNote } from '../utils/network-data'

function AddPage() {
  const navigate = useNavigate();

  async function onAddNoteHandler({ title, body }){
    await addNote({ title, body });
    navigate('/');
  }


  return (
    <section>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  )
}

export default AddPage;