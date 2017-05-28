console.log('Starting app.');

const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
let command = process.argv[2];

const logNote = (note) =>
console.log(
  '--\n',
  `Title: ${note.title}\n`,
  `Body: ${note.body}`
);

switch (command) {
  case 'add': {
    console.log('Adding new note...');
    let note = notes.addNote(argv.title, argv.body);
    if (note === undefined) {
      console.log('Note already exists.');
    } else {
      logNote(note)
    }
    break;
  }

  case 'list': {
    console.log('Listing all notes...');
    const allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach(note => logNote(note));
    break;
  }

  case 'read': {
    console.log('Reading note...');
    const note = notes.readNote(argv.title);
    if (note === undefined) {
      console.log('Note not found');
    } else {
      console.log('Note found!\n');
      logNote(note);
    }
    break;
  }

  case 'remove': {
    console.log('Removing note...');
    const noteRemoved = notes.removeNote(argv.title);
    const message = noteRemoved
      ? `Note with title ${argv.title} was removed!`
      : `Note with title ${argv.title} was not found`;
    console.log(message);
    break;
  }

  default:
    console.log('Command not recognized.');
}
