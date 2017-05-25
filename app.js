console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const _ = require('lodash')

const notes = require('./notes');

let filteredArray = _.uniq(['Aki', 1, 'Aki', 1, 2, 3, 4]);
console.log(filteredArray);
 
// console.log(_.isString(true));
// console.log(_.isString('Aki'));

// let res = notes.addNote();
// console.log(res);
//
// console.log(`Result ${notes.add(9, -2)}`);

// let user = os.userInfo();
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);
