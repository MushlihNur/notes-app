import React from "react";

function ArchiveButton({ id, onArchive, archive }) {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      {archive ? "Pindahkan" : "Arsipkan"}
    </button>
  );
}

export default ArchiveButton;
