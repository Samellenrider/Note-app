(function(exports) {
function NoteListView(listObject) {
  this.listObject = listObject
}
  NoteListView.prototype.view = function() {
  	var string = ""; 
   for (i = 0; i < this.listObject.notes.length; i++){
   	 string += "<li><div>" + this.listObject.notes[i].text + "</div></li>"
    
  };

return "<ul>" + string + "</ul>"

 };

  exports.NoteListView = NoteListView;
})(this);
