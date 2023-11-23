import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive, keyword }) {
  const searchNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="notes-list">
      {searchNotes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          archive={note.archived}
          onDelete={onDelete}
          onArchive={onArchive}
          {...note}
        />
      ))}
    </div>
  );
}

export default NoteList;
