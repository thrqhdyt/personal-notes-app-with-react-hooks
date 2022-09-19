import React from "react";
import PropTypes from "prop-types";
import NoteDetail from "../components/NoteDetail";
import { deleteNote, getNote, archiveNote, unarchiveNote } from "../utils/local-data";
import { useParams } from "react-router-dom";


function DetailPageWrapper() {
  const { id } = useParams();

  function onDeleteHandler(id) {
    deleteNote(id);
  }

  function onArchivedHandler(id){
    archiveNote(id);
  }

  function onUnArchivedHandler(id){
    unarchiveNote(id)
  }

  return <DetailPage id={id} onDelete={onDeleteHandler} onArchived={onArchivedHandler} unArchived={onUnArchivedHandler} />
}


class DetailPage extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        note: getNote(props.id),
      }
    }

    render() {
      return (
        <section className="detail-page">
          <NoteDetail {...this.state.note} onDelete={deleteNote} onArchived={archiveNote} unArchived={unarchiveNote}/>
        </section>
      )
    }
}


DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchived: PropTypes.func.isRequired,
  unArchived: PropTypes.func.isRequired
}


export default DetailPageWrapper;