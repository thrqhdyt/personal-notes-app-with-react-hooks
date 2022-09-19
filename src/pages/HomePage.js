import React from "react";
import AddAction from "../components/AddAction";
import NoteList from "../components/NoteList";
import { getActiveNotes, getAllNotes } from "../utils/local-data";

class HomePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            notes: getAllNotes(),
        }
    }

    render() {
        const notes = this.state.notes;
        const activeNotes = notes.filter((note) => note.archived === false );
        return (
            <section>
                {activeNotes.length !== 0 ? <NoteList notes={activeNotes} /> : <div className="notes-list-empty"><p>Tidak ada catatan</p></div>}
                <AddAction />
            </section>
        )
    }
}


export default HomePage;