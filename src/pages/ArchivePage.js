import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes } from "../utils/local-data";


function ArchivedPageWrapper(){
  const [ searchParams, setSearchParams ] = useSearchParams();

  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword){
    setSearchParams({ keyword })
  }

  return <ArchivedPage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}


class ArchivedPage extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        notes: getArchivedNotes(),
        keyword: props.defaultKeyword || ''
      }

      this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onKeywordChangeHandler(keyword){
      this.setState(() => {
          return {
              keyword
          }
      });

      this.props.keywordChange(keyword);
    }

    render(){
      const notes = this.state.notes.filter((note) => {
        return note.title.toLowerCase().includes(
          this.state.keyword.toLowerCase()
        )
      });
      
      const archivedNote = notes.filter((note) => note.archived === true)
      
      return(
        <section className="archives-page">
          <h2>Catatan Arsip</h2>
          <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
          {archivedNote.length !== 0 ? <NoteList notes={archivedNote} /> : <section className="notes-list-empty"><p>Tidak ada catatan</p></section> }
        </section>
      )
    }
}


export default ArchivedPageWrapper;