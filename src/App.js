import React, { useState } from "react";
import "./App.css";
import Notes from "./components/Notes";
import AddIcon from "@mui/icons-material/Add";
import AddNote from "./components/AddNote"; // Import your modal component

function App() {
  const [isAddNoteModalOpen, setAddNoteModalOpen] = useState(false);

  const openAddNoteModal = () => {
    setAddNoteModalOpen(true);
  };

  const closeAddNoteModal = () => {
    setAddNoteModalOpen(false);
  };

  return (
    <>
      <div>
        <h3 className="text-[#f87171] text-6xl text-center mt-7 font-bold">
          Notes
        </h3>
        <Notes />
        <div
          className="bg-[#f87171] p-3 fixed right-8 bottom-8 cursor-pointer"
          onClick={openAddNoteModal}
        >
          <AddIcon className="text-white" />
        </div>
      </div>
      {isAddNoteModalOpen && <AddNote onClose={closeAddNoteModal} />}
    </>
  );
}

export default App;
