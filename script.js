function early() {
  const newColor = getComputedStyle(document.querySelector('.color')).backgroundColor;
  document.querySelector('.color').className = 'selected color';
  document.querySelector('.selected').style.backgroundColor = newColor;
  for (let element = 1; element <= 3; element += 1) {
    const alColorA = [(Math.random() * 256), (Math.random() * 256), (Math.random() * 256)];
    const alColorB = `${'rgb('}${alColorA[0]}${', '}${alColorA[1]}${', '}${alColorA[2]}${')'}`;
    document.getElementsByClassName('color')[element].style.backgroundColor = alColorB;
  }
}

window.onload = early;

const label = document.querySelectorAll('#color-palette div');
function labelClass(event) {
  const action = event.target;
  for (let element = 0; element < label.length; element += 1) {
    if (action === document.querySelectorAll('#color-palette div')[element]) {
      const newColor = getComputedStyle(action).backgroundColor;
      action.className = 'selected color';
      document.querySelector('.selected').style.backgroundColor = newColor;
    } else {
      label[element].className = 'color';
    }
  }
}

for (let element = 0; element < label.length; element += 1) {
  label[element].addEventListener('click', labelClass);
}

function paintPixel(event) {
  const action = event.target;
  const newColor = getComputedStyle(document.querySelector('.selected')).backgroundColor;
  action.style.backgroundColor = newColor;
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
  const labelLi = document.querySelectorAll('#pixel-board li');
  const contador = labelLi.length - 1;
  for (let element = contador; element >= 0; element -= 1) {
    labelLi[element].remove();
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
      document.getElementsByTagName('li')[element].className = 'pixel';
      document.querySelectorAll('.pixel')[element].insertAdjacentElement('afterend', myBr);
    } else {
      document.querySelector('#pixel-board').appendChild(novoPixel);
      document.getElementsByTagName('li')[element].className = 'pixel';
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
