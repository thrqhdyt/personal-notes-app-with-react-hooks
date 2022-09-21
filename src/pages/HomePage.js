import React from "react";
import { useSearchParams } from "react-router-dom";
import AddAction from "../components/AddAction";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getAllNotes } from "../utils/local-data";

function HomePageWrapper(){
    const [ searchParams, setSearchParams ] = useSearchParams();

    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword){
        setSearchParams({ keyword })
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            notes: getAllNotes(),
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

    render() {
        const notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            )
        });
        const activeNotes = notes.filter((note) => note.archived === false );
        return (
            <section className="homepage">
                <h2>Catatan Aktif</h2>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                {activeNotes.length !== 0 ? <NoteList notes={activeNotes} /> : <section className="notes-list-empty"><p>Tidak ada catatan</p></section>}
                <AddAction />
            </section>
        )
    }
}


export default HomePageWrapper;