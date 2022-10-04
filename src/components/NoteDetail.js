import React from 'react'
import PropTypes from 'prop-types'
import { showFormattedDate } from '../utils'
import DeleteButton from './DeleteButton'
import ArchivedButton from './ArchivedButton'
import UnArchivedButton from './UnArchivedButton'

function NoteDetail({ id, title, createdAt, body, onDelete, onArchived, unArchived, archived }) {
  return (
    <>
      <h3 className='detail-page__title'>{title}</h3>
      <p className='detail-page__createdAt'>{showFormattedDate(createdAt)}</p>
      <div className='detail-page__body'>{body}</div>
      <div className='detail-page__action'>
        { archived === false ? <ArchivedButton id={id} onArchived={onArchived} /> : <UnArchivedButton id={id} unArchived={unArchived} />}
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </>
  )
}


NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchived: PropTypes.func.isRequired,
  unArchived: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
}



export default NoteDetail