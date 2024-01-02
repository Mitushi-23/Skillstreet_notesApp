// ViewNoteModal.js
import React from "react";

const ViewNote = ({ isOpen, onClose, note }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-md">
        <div className="w-96">
          <h2 className="text-wrap text-xl font-bold mb-4">{note.title}</h2>
          <p
            style={{
              textAlign: note.style.textAlign,
              fontSize: `${note.style.fontSize}px`,
              fontWeight: note.style.fontWeight ? "bold" : "normal",
              fontStyle: note.style.fontStyle ? "italic" : "normal",
              textDecoration: note.style.textDecoration ? "underline" : "none",
            }}
            className="text-wrap"
          >
            {note.description}
          </p>
        </div>
        <button
          className="bg-[#f87171] text-white px-3 py-2 rounded-md mt-4"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewNote;
