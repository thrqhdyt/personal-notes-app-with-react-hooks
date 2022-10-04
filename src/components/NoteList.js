import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

function NoteList({notes}) {
  return (
      <section className='notes-list'>
        {notes.map((note) => (
            <NoteItem
              key={note.id}
              archive={note.archived}
              {...note}
          /> 
        ))}
      </section>
  )
}


NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NoteList