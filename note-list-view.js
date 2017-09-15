(function(exports) {
function NoteListView(listObject) {
  this.listObject = listObject
}
  NoteListView.prototype.view = function() {
  	var string = ""; 
   for (i = 0; i < this.listObject.notes.length; i++){
   	var text = this.listObject.notes[i].text;
   	 if (text.length > 20) text = text.substring(0, 20)
   	 string += "<li><a href=#" + text + "></a></li>"
    
  };

return "<ul>" + string + "</ul>"

 };

  exports.NoteListView = NoteListView;
})(this);
