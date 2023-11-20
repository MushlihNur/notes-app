import React from "react";
import NoteItemBody from "./NoteItemBody";
import NoteItemAction from "./NoteItemAction";

function NoteItem({
  title,
  body,
  createdAt,
  id,
  onDelete,
  onArchive,
  archive,
}) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} body={body} createdAt={createdAt} />
      <NoteItemAction
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        archive={archive}
      />
    </div>
  );
}

export default NoteItem;
