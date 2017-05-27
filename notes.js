console.log('Starting notes.js');
const fs = require('fs');

const addNote = (title, body) => {
  let notes = [];
  const note = {
    title,
    body
  };

  try {
    const notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (error) {}

  const duplicateNotes = notes.filter((note) => {
    return note.title === title
  });

  if(duplicateNotes.length === 0){
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
};

const getAll = () => {
  console.log('Getting all notes');
};

const readNote = title => {
  console.log('Reading note ', title);
};

const removeNote = title => {
  console.log('Deleting note', title);
};

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
};
