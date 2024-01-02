import React from "react";
import Masonry from "react-masonry-css";
import Note from "./Note";
import { useSelector } from "react-redux";


const Notes = () => {
  const notes = useSelector((state) => state.notes);
  return (
    <div className="container mx-auto mt-10">
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note, index) => (
          <div key={index} className="bg-[#f5d3ab] p-2 text-center h-48">
            <Note title={note.title} description={note.description} id={note.id} style={note.style} />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Notes;
