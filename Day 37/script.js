const noteInput = document.getElementById('noteInput');
const savedNote = document.getElementById('savedNote');

// Load saved note on page load
window.onload = () => {
  const note = localStorage.getItem('note');
  if (note) {
    savedNote.textContent = note;
    noteInput.value = note;
  }
};

function saveNote() {
  const note = noteInput.value;
  localStorage.setItem('note', note);
  savedNote.textContent = note;
}
