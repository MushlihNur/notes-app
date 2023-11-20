import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: {
        title: "",
        body: "",
      },
      titleLimit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const limit = 50;
    const title = event.target.value.slice(0, limit);

    this.setState((prevState) => {
      return {
        note: { ...prevState.note, title },
        titleLimit: limit - title.length,
        // title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        note: { ...prevState.note, body: event.target.value },
        // body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state.note);
  }

  render() {
    return (
      <form onSubmit={this.onSubmitEventHandler}>
        <p className="note-input__title__char-limit">
          Sisa karakter: {this.state.titleLimit}
        </p>
        <input
          type="text"
          className="note-input__title"
          placeholder="Ini adalah judul ..."
          value={this.state.note.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <textarea
          className="note-input__body"
          placeholder="Tuliskan catatanmu disini ..."
          value={this.state.note.body}
          onChange={this.onBodyChangeEventHandler}
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    );
  }
}

export default NoteInput;
