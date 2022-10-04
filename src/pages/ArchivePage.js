import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { LocaleConsumer } from "../contexts/LocaleContext";
import { getArchivedNotes } from '../utils/network-data'

function ArchivedPage() {
  const [ notes, setNotes ] = useState([]);
  const [ searchParams, setSearchParams ] = useSearchParams();
  const [ keyword, setKeyword ] = useState(() => {
    return searchParams.get('keyword') || ''
  })
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setNotes(data);
      setLoading(false);
    })

    return () => {
      setLoading(true)
    }
  }, [])

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNote = notes.filter((note) => {
    return note.title.toLowerCase().includes(
      keyword.toLowerCase()
    );
  });

  const archivedNote = filteredNote.filter((note) => note.archived === true);


  if (loading) {
    return <p>Loading......</p>
  }

  return (
          <LocaleConsumer>
            {
              ({ locale }) => {
                return (
                  <section className="archives-page">
                    <h2>{ locale === 'id' ? 'Catatan Arsip' : 'Archived Note'}</h2>
                    <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
                    {archivedNote.length !== 0 ? <NoteList notes={archivedNote} /> : <section className="notes-list-empty"><p>Tidak ada catatan</p></section> }
                    </section>
                )
              }
            }
          </LocaleConsumer>  
  )
}


export default ArchivedPage;