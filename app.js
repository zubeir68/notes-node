const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");
const notes = require("./notes.js");

const titleOptions = {
  describe: "Title of note",
  demand: true,
  alias: "t"
};

const argv = yargs
  .command("add", "Add a new note", {
    title: titleOptions,
    body: {
      describe: "Body of note",
      demand: true,
      alias: "b"
    }
  })
  .command("list", "List all notes")
  .command("read", "Read a note", {
    title: titleOptions
  })
  .command("remove", "Remove a note", {
    title: titleOptions
  })
  .help().argv;

var command = argv._[0];


if (command === "add") {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note created");
    notes.logNote(note);
  } else {
    console.log("Err: Title already taken");
  }
} else if (command === "list") {
  let allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach(note => {
    notes.logNote(note);
  });
} else if (command === "read") {
  let note = notes.getNote(argv.title);
  if (note) {
    notes.logNote(note);
  } else {
    console.log("--");
    console.log("Err: Note does not exist");
  }
} else if (command === "remove") {
  let note = notes.removeNote(argv.title);
  if (note === true) {
    console.log(`Note with the title: ${argv.title}, is removed`);
  } else {
    console.log("Err: Title does not exist");
  }
} else if (command === "edit") {
  let note = notes.editNote(argv.title, argv.body);
  if(note) {
    console.log("Note edited");
    notes.logNote(note);
  } else {
    console.log("Err: Note not found");
  }
}
