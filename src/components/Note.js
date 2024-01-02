import React, { useState } from "react";
import ViewNote from "./ViewNote";
import { useDispatch } from "react-redux";
import { deleteNote } from "../actions/noteAction";
import AddNote from "./AddNote";

const Note = ({ title, description, id, style }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditFormOpen, setEditFormOpen] = useState(false);
  const dispatch = useDispatch();
  console.log(style);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleEdit = () => {
    setEditFormOpen(true);
    setModalOpen(false);
  };

  const handleDelete = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (isConfirmed) {
      dispatch(deleteNote(id));
    }
  };

  const truncatedDescription =
    description.length > 20
      ? `${description.substring(0, 20)}...`
      : description;

  return (
    <>
      <div className="px-4 py-2">
        <h5 className="text-start font-bold text-xl mb-4">{title}</h5>
        <h6
          style={{
            textAlign: style.textAlign,
            fontSize: `${style.fontSize}px`,
            fontWeight: style.fontWeight ? "bold" : "normal",
            fontStyle: style.fontStyle ? "italic" : "normal",
            textDecoration: style.textDecoration ? "underline" : "none",
          }}
        >
          {truncatedDescription}
        </h6>
      </div>
      <div className="flex justify-evenly mt-10">
        <button
          className="py-1 px-4 rounded-lg border-2 border-[#f87171] hover:bg-[#f87171]"
          onClick={openModal}
        >
          View Note
        </button>
        <button
          className="py-1 px-4 rounded-lg border-2 border-[#f87171] hover:bg-[#f87171]"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className="py-1 px-4 rounded-lg border-2 border-[#f87171] hover:bg-[#f87171]"
          onClick={handleDelete}
        >
          Delete
        </button>

        <ViewNote
          isOpen={isModalOpen}
          onClose={closeModal}
          note={{ title, description, style }}
        />
        {isEditFormOpen && (
          <AddNote
            isEditing={true}
            initialData={{ id, title, description }}
            onClose={() => setEditFormOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default Note;
