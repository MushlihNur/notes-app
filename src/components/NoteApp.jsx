import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../utils";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
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

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.archived = !note.archived;
      }
      return note;
    });
    this.setState(notes);
  }

  render() {
    const activeNotes = this.state.notes.filter((note) => !note.archived);
    const archivedNotes = this.state.notes.filter((note) => note.archived);

    return (
      <div className="note-app__body">
        <div className="note-input">
          <h2>Buat Catatan</h2>
          <NoteInput addNote={this.onAddNoteHandler} />
        </div>
        <h2>Catatan Aktif</h2>
        {activeNotes.length > 0 ? (
          <NoteList
            notes={activeNotes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        ) : (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        )}
        <h2>Arsip</h2>
        {archivedNotes.length > 0 ? (
          <NoteList
            notes={archivedNotes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        ) : (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        )}
      </div>
    );
  }
}

export default NoteApp;
