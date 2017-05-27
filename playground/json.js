const fs = require('fs');

const originalNote = {
  title: "Title",
  body: "Body"
}

const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

const noteString = fs.readFileSync('notes.json');
const note = JSON.parse(noteString);

console.log(note.title);
