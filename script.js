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

function clearTable() {
  for (let element = 0; element < document.querySelectorAll('.pixel').length; element += 1) {
    document.querySelectorAll('.pixel')[element].style.backgroundColor = 'white';
  }
}

document.querySelector('#clear-board').addEventListener('click', clearTable);

// REQUISITO 10:
function clearToNewTable() {
  const contador = document.querySelectorAll('.pixel').length - 1;
  for (let element = contador; element >= 0; element -= 1) {
    document.querySelectorAll('#pixel-board li')[element].remove();
  }
  const contador2 = document.querySelectorAll('#pixel-board br').length - 1;
  for (let element = contador2; element >= 0; element -= 1) {
    document.querySelectorAll('#pixel-board br')[element].remove();
  }
}

function newTable(num) {
  clearToNewTable();
  for (let element = 0; element < (num * num); element += 1) {
    const novoPixel = document.createElement('li');
    const myBr = document.createElement('br');
    if ((element + 1) % num === 0 && element > 0) {
      document.querySelector('#pixel-board').appendChild(novoPixel);
      document.querySelectorAll('#pixel-board li')[element].className = 'pixel';
      document.querySelectorAll('.pixel')[element].insertAdjacentElement('afterend', myBr);
    } else {
      document.querySelector('#pixel-board').appendChild(novoPixel);
      document.querySelectorAll('#pixel-board li')[element].className = 'pixel';
    }
  }
}

function verifyingfBSize0(newNum) {
  if (newNum === 0) {
    alert('Board inválido!');
  } else {
    return newTable(newNum);
  }
}

function verifyingfBSize() {
  const num = document.getElementById('board-size').value;
  let newNum = 0;
  if (num === '') {
    newNum = 0;
  } else if (num < 5) {
    newNum = 5;
  } else if (num > 50) {
    newNum = 50;
  } else {
    newNum = num;
  }
  return verifyingfBSize0(newNum);
}

document.querySelector('#generate-board').addEventListener('click', verifyingfBSize);
