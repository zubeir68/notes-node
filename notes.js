

const fs = require("fs");

//fetch notes-data.json
let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

//will save notes into json file
let saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

let logNote = note => {
  debugger;
  console.log("--");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

//Will add note
let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

  let duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

//Will list all notes
let getAll = () => {
    return fetchNotes();
};

//Will get note based on title
let getNote = title => {
  let notes = fetchNotes();

  let filteredNote = notes.filter(note => note.title === title);

  if (filteredNote.length > 0) {
    let note = filteredNote[0];
    return note;
  }
};

//Will remove note based on title
let removeNote = title => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter(note => note.title === title);

  if (filteredNotes.length > 0) {
    let note = filteredNotes[0];
    for (let i = 0; i < notes.length - 1; i++) {
      if (notes[i] === note) {
        notes.splice(i, 1);
      }
    }
    saveNotes(notes);
    return true;
  }
}; 

//Will edit note based on title
let editNote = (title, body) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter(note => note.title === title);
  let note = filteredNotes[0];

  note.body = body;
  saveNotes(notes);
  return note

}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  editNote,
  logNote
};
