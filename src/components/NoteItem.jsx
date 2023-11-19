import React from "react";
import NoteItemBody from "./NoteItemBody";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ title, body, createdAt, id, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} body={body} createdAt={createdAt} />
      <NoteItemAction id={id} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
}

export default NoteItem;
