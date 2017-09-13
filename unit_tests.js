// var Note = require('./note-model.js');
// var NoteList = require('./note-list-model.js');
// var NoteListView = require('./note-list-view.js');

(function(exports) {
function testNote() {
  var note = new Note('this is a test');
    if (note.text !== 'this is a test') {
      throw new Error('does not instantiate with text')
    };
    if (note.read() !== 'this is a test') {
      throw new Error('does not return stored text')
    };
   }
  
  testNote();
})(this);


(function(exports) {
function testList(){
  var noteList = new NoteList;
  var note = new Note('First note');
    noteList.addNote(note);
  if (noteList.notes[0].read() !== 'First note'){
  	throw new Error('Does not read note from array')
  };
 }
  
  testList();
})(this);



(function(exports) {
function testAdd(){
  var noteList = new NoteList;
  var note = new Note('First note');
    noteList.addNote(note);
  var noteListView = new NoteListView(noteList);
    if (noteListView.view() !== '<ul><li><div>First note</div></li></ul>'){
  	  throw new Error('Does not print notes into HTML')
    };
  }
 
  testAdd();
})(this);











