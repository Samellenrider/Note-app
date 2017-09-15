// var Note = require('./note-model.js');
// var NoteList = require('./note-list-model.js');
// var NoteListView = require('./note-list-view.js');

(function(exports) {
function testNote() {
  var note = new Note('this is a test');
    if (note.text !== 'this is a test') {
      throw new Error('does not instantiate with text')
    };
    if (note.id !== 0) {
      throw new Error('wrong ID')
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
    noteList.addNote('First note');
  if (noteList.notes[0].read() !== 'First note'){
  	throw new Error('Does not read note from array')
  };
 }
  
  testList();
})(this);



(function(exports) {
function testAdd(){
  var noteList = new NoteList;
    noteList.addNote("First note");
  var noteListView = new NoteListView(noteList);
    if (noteListView.view() !== '<ul><li><a href=#First note></li></ul>'){
  	  throw new Error('Does not print notes into HTML')
    };
  }
 
  testAdd();
})(this);



(function(exports) {
function testController(){
  var noteList = new NoteList;
  var controller = new noteController(noteList);
    if (noteList.notes[0].read() !== "Trump sucks!"){
      throw new Error('Does not have note (Supports Trump)')
    };
  }

  testController();
})(this);



(function(exports) {
  function testSingleNote(){
    var note = new Note('hello');
    var singleView = new singleNoteView(note);
      if (singleView.returnHtml() !== "<div>hello</div>"){
        throw new Error('Does not return HTML')
      };
  }
  testSingleNote();
})(this);



(function(exports) {
function testAdd(){
  var noteList = new NoteList;
    noteList.addNote("123451234512345123451234512345");
  var noteListView = new NoteListView(noteList);
    if (noteListView.view() !== '<ul><li><a href=#12345123451234512345></li></ul>'){
      throw new Error('Does not print notes into HTML')
    };
  }
 
  testAdd();
})(this);

































