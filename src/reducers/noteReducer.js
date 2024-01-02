
const initialState = {
  notes: JSON.parse(localStorage.getItem("notes")) || [],
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      const newNotes = [...state.notes, action.payload];
      localStorage.setItem("notes", JSON.stringify(newNotes));
      return { ...state, notes: newNotes };

    case 'EDIT_NOTE':
      const editedNotes = state.notes.map((note) =>
        note.id === action.payload.id ? { ...note, ...action.payload.editedData } : note
      );
      localStorage.setItem("notes", JSON.stringify(editedNotes));
      return { ...state, notes: editedNotes };

    case 'DELETE_NOTE':
      const filteredNotes = state.notes.filter((note) => note.id !== action.payload.id);
      localStorage.setItem("notes", JSON.stringify(filteredNotes));
      return { ...state, notes: filteredNotes };

    default:
      return state;
  }
};

export default noteReducer;
