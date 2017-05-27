console.log('Starting app.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
let command = process.argv[2];

switch (command) {
  case 'add':
    console.log('Adding new note.');
    notes.addNote(argv.title, argv.body);
    break;

  case 'list':
    console.log('Listing all notes.');
    break;

  case 'read':
    console.log('Reading note.');
    notes.readNote(argv.title);
    break;

  case 'remove':
    console.log('Removing note.');
    notes.removeNote(argv.title);
    break;

  default:
    console.log('Command not recognized.');
}
