import React from "react";
import NoteList from "../components/NoteList";
import { getArchivedNotes } from "../utils/local-data";


class ArchivedPage extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        notes: getArchivedNotes()
      }
    }


    render(){
      const notes = this.state.notes;
      const archivedNote = notes.filter((note) => note.archived === true)
      return(
        <section>
          {archivedNote.length !== 0 ? <NoteList notes={archivedNote} /> : <div className="notes-list-empty"><p>Tidak ada catatan</p></div> }
          
        </section>
      )
    }
}


export default ArchivedPage;