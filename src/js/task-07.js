const inputFontSize = document.querySelector('input#font-size-control');
const spanText = document.querySelector('span#text');
function setFontSize() {
    // spanText.setAttribute('style', `font-size:${inputFontSize.value}px`)
    spanText.style.fontSize = inputFontSize.value + 'px';
}

inputFontSize.addEventListener('input', setFontSize);