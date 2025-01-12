import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItemAction({ id, onDelete, onArchive, archive }) {
  return (
    <div className="note-item__action">
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchiveButton id={id} onArchive={onArchive} archive={archive} />
    </div>
  );
}

export default NoteItemAction;
