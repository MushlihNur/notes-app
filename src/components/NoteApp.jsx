import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../utils";
import NoteInput from "./NoteInput";

// function NoteApp() {
//   const notes = getInitialData();

//   return (
//     <div className="note-app__body">
//       <h2>Catatan Aktif</h2>
//       <NoteList notes={notes} />
//     </div>
//   );
// }

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archive: false,
            createdAt: new Date(),
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  render() {
    return (
      <div className="note-app__body">
        <div className="note-input">
          <h2>Buat Catatan</h2>
          <NoteInput addNote={this.onAddNoteHandler} />
        </div>
        <h2>Catatan Aktif</h2>
        <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

export default NoteApp;
