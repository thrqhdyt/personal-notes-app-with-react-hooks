import React from "react";
import SaveButton from "./SaveButton";



class NoteInput extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: '',
        };

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event){
        this.setState((prevState) => {
            return {
                ...prevState,
                title: event.target.value,
            }
        })
    }

    onBodyChangeEventHandler(event){
        this.setState((prevState) => {
            return {
                ...prevState,
                body: event.target.innerText,
            }
        })
    }


    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }


    render() {
        return (
            <section className="add-new-page">
              <form className="add-new-page__input" onSubmit={this.onSubmitEventHandler}>
                  <input className="add-new-page__input__title" type="text" placeholder="Masukkan Judul" onChange={this.onTitleChangeEventHandler}/>
                  <div className="add-new-page__input__body" data-placeholder="Masukkan isi catatan...." contentEditable onInput={this.onBodyChangeEventHandler}></div>
                  <SaveButton />
              </form>
            </section>
        )
    }
}

export default NoteInput;