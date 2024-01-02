import { v4 as uuidv4 } from 'uuid';

export const addNote = (note) => {
  const id = uuidv4(); // Generate a unique ID
  console.log('Adding Note:', { ...note, id });

  return {
    type: 'ADD_NOTE',
    payload: { ...note, id },
  };
};
  
  // actions.js
export const editNote = (id, editedData) => ({
    type: 'EDIT_NOTE',
    payload: { id, editedData },
  });
  
  export const deleteNote = (id) => ({
    type: 'DELETE_NOTE',
    payload: { id },
  });
  