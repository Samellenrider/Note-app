// (function(exports) {
  // function Controller() {  };

  printElement = function () {
  	var element = document.getElementById("app");
  	console.log(document.getElementById("app"));
  };

    changeElement = function () {
    console.log(document.getElementById("app"))
  	document.getElementById("app").innerHTML = NoteList;
  };
  // exports.Controller = Controller;
// })(this);

(function(exports) {
	var noteController =  function(NoteListInstance) {
		this.list = NoteListInstance
		this.list.addNote("Trump sucks!")
		this.NoteListView = new NoteListView(this.list)
	}
	noteController.prototype.setView = function() {
		var html = this.NoteListView.view();
		document.getElementById("app").innerHTML = html 

	}
	exports.noteController = noteController;
})(this);

