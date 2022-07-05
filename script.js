window.onload = minhaFuncao;
function minhaFuncao() {
  document.querySelectorAll('.color-palette, section')[0].className =  "selected";
}
for(let element = 1; element < document.querySelectorAll('.color-palette, section').length; element += 1) {
  document.querySelectorAll('.color-palette, section')[element].addEventListener('click', labelClass);
}
function labelClass(action) {
  if (action.tag === document.querySelectorAll('.color-palette, section')[0]) {
    action.tag.className = 'selected';
    document.querySelectorAll('.color-palette, section')[1].className = 'color';
    document.querySelectorAll('.color-palette, section')[2].className = 'color';
    document.querySelectorAll('.color-palette, section')[3].className = 'color';
  }
  console.log(document.querySelectorAll('.color-palette, section'));
}
