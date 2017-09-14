(function(exports) {
	var singleNoteView = function(noteModel){
      this.note = noteModel;
	}
	singleNoteView.prototype.returnHtml = function() {
	  return "<div>" + this.note.read() + "</div>"
	}

	exports.singleNoteView = singleNoteView;

	
})(this);

