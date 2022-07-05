function early() {
  const newColor = getComputedStyle(document.querySelector('.color')).backgroundColor;
  document.querySelector('.color').className = 'selected color';
  document.querySelector('.selected').style.backgroundColor = newColor;
}

window.onload = early;

function labelClass(action) {
  const label = document.querySelectorAll('#color-palette div');
  for (let element = 0; element < label.length; element += 1) {
    if (action.target === document.querySelectorAll('#color-palette div')[element]) {
      const newColor = getComputedStyle(action.target).backgroundColor;
      action.target.className = 'selected color';
      document.querySelector('.selected').style.backgroundColor = newColor;
    } else {
      document.querySelectorAll('#color-palette div')[element].className = 'color';
    }
  }
  console.log(document.querySelectorAll('#color-palette div'));
}

for (let element = 0; element < document.querySelectorAll('#color-palette div').length; element += 1) {
  document.querySelectorAll('#color-palette div')[element].addEventListener('click', labelClass);
}

function paintPixel(action) {
  const newColor = getComputedStyle(document.querySelector('.selected')).backgroundColor;
  action.target.style.backgroundColor = newColor;
}

for (let element = 0; element < document.querySelectorAll('.pixel').length; element += 1) {
  document.querySelectorAll('.pixel')[element].addEventListener('click', paintPixel);
}
