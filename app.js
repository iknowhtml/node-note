console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

let res = notes.addNote();
console.log(res);

console.log(`Result ${notes.add(9, -2)}`);

// let user = os.userInfo();
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);
