// let obj = {
//     name: 'Andrew'
// };

// var stringObj = JSON.stringifybj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Zubeir", "age": 25}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

let originalNote = {
    title: "Some title",
    body: "Some body"
};

let originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
