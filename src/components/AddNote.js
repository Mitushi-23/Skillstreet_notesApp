import React, { useState } from "react";
import ButtonGrp from "./ButtonGrp";
import { useDispatch } from "react-redux";
import { addNote, editNote } from "../actions/noteAction";

const AddNote = ({ isEditing, initialData, onClose }) => {
  const [noteTitle, setNoteTitle] = useState(
    isEditing ? initialData.title : ""
  );
  const [noteDescription, setNoteDescription] = useState(
    isEditing ? initialData.description : ""
  );
  const [descriptionStyle, setDescriptionStyle] = useState({
    textAlign: "start",
    fontSize: 20,
    fontWeight: false,
    fontStyle: false,
    textDecoration: false,
  });
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    setNoteTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setNoteDescription(e.target.value);
  };

  const handleStyleChange = (styleType, value) => {
    setDescriptionStyle((prevStyle) => ({
      ...prevStyle,
      [styleType]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const noteData = {
      title: noteTitle,
      description: noteDescription,
      style: descriptionStyle, // Save style along with description
    };

    if (isEditing) {
      console.log(initialData.id);
      dispatch(editNote(initialData.id, noteData));
    } else {
      dispatch(addNote(noteData));
    }

    setNoteTitle("");
    setNoteDescription("");
    setDescriptionStyle({
      textAlign: "start",
      fontSize: 20,
      fontWeight: false,
      fontStyle: false,
      textDecoration: false,
    });
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-xl font-bold mb-4">
          {isEditing ? "Edit Note" : "Add Note"}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="noteTitle"
              className="block text-md text-start font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="noteTitle"
              name="noteTitle"
              value={noteTitle}
              onChange={handleTitleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="noteDescription"
              className="flex items-center text-md text-start font-medium text-gray-700"
            >
              Description
            <ButtonGrp onStyleChange={handleStyleChange} />
            </label>
            <textarea
              id="noteDescription"
              name="noteDescription"
              value={noteDescription}
              onChange={handleDescriptionChange}
              className="mt-1 p-2 w-full border rounded-md"
              style={{
                textAlign: descriptionStyle.textAlign,
                fontSize: `${descriptionStyle.fontSize}px`,
                fontWeight: descriptionStyle.fontWeight ? "bold" : "normal",
                fontStyle: descriptionStyle.fontStyle ? "italic" : "normal",
                textDecoration: descriptionStyle.textDecoration
                  ? "underline"
                  : "none",
              }}
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 bg-gray-300 text-gray-700 px-3 py-2 rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#f87171] text-white px-3 py-2 rounded-md"
            >
              {isEditing ? "Save Changes" : "Add Note"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
