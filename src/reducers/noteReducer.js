// reducer.js
const initialState = {
    notes: [],
  };
  
  const noteReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_NOTE':
        return {
          ...state,
          notes: [...state.notes, action.payload],
        };
      case 'EDIT_NOTE':
        // Update the note based on the edited data
        console.log(action)
        return {
          ...state,
          notes: state.notes.map((note) =>
            note.id === action.payload.id ? { ...note, ...action.payload.editedData } : note
          ),
        };
      case 'DELETE_NOTE':
        // Remove the note with the specified id
        return {
          ...state,
          notes: state.notes.filter((note) => note.id !== action.payload.id),
        };
      default:
        return state;
    }
  };
  
  export default noteReducer;
  