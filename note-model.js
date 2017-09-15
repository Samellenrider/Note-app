(function(exports) {

  var noteCount = 0

function Note(text) {
  this.text = text
  this.id = noteCount
  noteCount += 1
};

  Note.prototype.read = function() {
    return this.text
  }
  exports.Note = Note;
})(this);

// module.exports = Note
