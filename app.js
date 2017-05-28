console.log('Starting app.');

const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
let command = process.argv[2];

switch (command) {
  case 'add': {
    console.log('Adding new note...');
    let note = notes.addNote(argv.title, argv.body);
    if (note === undefined) {
      console.log('Note already exists.');
    } else {
      console.log(
        'Note added!\n',
        '--\n',
        `Title: ${note.title}\n`,
        `Body: ${note.body}`
      );
    }
    break;
  }

  case 'list': {
    console.log('Listing all notes.');
    break;
  }

  case 'read': {
    console.log('Reading note.');
    notes.readNote(argv.title);
    break;
  }

  case 'remove': {
    console.log('Removing note...');
    const noteRemoved = notes.removeNote(argv.title);
    const message = noteRemoved? `Note with title ${argv.title} was removed!` : `Note with title ${argv.title} was not found`;
    console.log(message);
    break;
  }

  default:
    console.log('Command not recognized.');
}
