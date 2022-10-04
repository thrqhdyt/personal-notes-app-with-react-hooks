import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AddAction from "../components/AddAction";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { LocaleConsumer } from "../contexts/LocaleContext";
import { getActiveNotes } from "../utils/network-data";


function HomePage() {
  const [ notes, setNotes ] = useState([]);
  const [ searchParams, setSearchParams ] = useSearchParams();
  const [ keyword, setKeyword ] = useState(() => {
    return searchParams.get('keyword') || ''
  })
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
      setLoading(false)
    })

    return () => {
      setLoading(true);
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

  const activeNotes = filteredNote.filter((note) => note.archived === false)


  if (loading) {
    return <p>Loading.........</p>
  }

  return (
          <LocaleConsumer>
            {
              ({ locale }) => {
                return (
                  <section className="homepage">
                    <h2>{ locale === 'id' ? 'Catatan Aktif' : 'Active Note'}</h2>
                    <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
                    {activeNotes.length !== 0 ? <NoteList notes={activeNotes} /> : <section className="notes-list-empty"><p>Tidak ada catatan</p></section>}
                    <AddAction />
                  </section>
                )
              }
            }
          </LocaleConsumer>
        )
}


export default HomePage;