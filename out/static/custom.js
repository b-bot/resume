setInterval(caretToggle, 500);

function caretToggle() {
  var caret = document.getElementsByClassName("term-caret")[0];
  if (caret.classList.contains('blink')) {
    caret.classList.remove('blink');
  } else {
    caret.classList.add('blink');
  }
};
