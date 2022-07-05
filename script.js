function early() {
  document.querySelectorAll('#color-palette div')[0].className = "selected";
}
window.onload = early;

function labelClass(action) {
  if (action.target === document.querySelectorAll('#color-palette div')[0]) {
    action.target.className = 'selected';
    document.querySelectorAll('#color-palette div')[1].className = 'color';
    document.querySelectorAll('#color-palette div')[2].className = 'color';
    document.querySelectorAll('#color-palette div')[3].className = 'color';
  }
  else if (action.target === document.querySelectorAll('#color-palette div')[1]) {
    action.target.className = 'selected';
    document.querySelectorAll('#color-palette div')[0].className = 'color';
    document.querySelectorAll('#color-palette div')[2].className = 'color';
    document.querySelectorAll('#color-palette div')[3].className = 'color';
  }
  else if (action.target === document.querySelectorAll('#color-palette div')[2]) {
    action.target.className = 'selected';
    document.querySelectorAll('#color-palette div')[0].className = 'color';
    document.querySelectorAll('#color-palette div')[1].className = 'color';
    document.querySelectorAll('#color-palette div')[3].className = 'color';
  }
  else if (action.target === document.querySelectorAll('#color-palette div')[3]) {
    action.target.className = 'selected';
    document.querySelectorAll('#color-palette div')[0].className = 'color';
    document.querySelectorAll('#color-palette div')[1].className = 'color';
    document.querySelectorAll('#color-palette div')[2].className = 'color';
  }
  console.log(document.querySelectorAll('#color-palette div'));
}

for(let element = 0; element < document.querySelectorAll('#color-palette div').length; element += 1) {
  document.querySelectorAll('#color-palette div')[element].addEventListener('click', labelClass);
}

function paintPixel() {
  console.log(document.querySelectorAll('.pixel'));
}

for(let element = 0; element < document.querySelectorAll('.pixel').length; element += 1) {
  document.querySelectorAll('.pixel')[element].addEventListener('click', paintPixel);
}
