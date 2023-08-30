function generateButton(name, className) {
    const buttonElem = document.createElement('button');
    buttonElem.innerText = name;
    buttonElem.className = className;
    return buttonElem;
}

function generateDeleteImg(className, width = 20) {
    const deleteImg = document.createElement('img');
    deleteImg.className = className;
    deleteImg.src = 'https://cdn-icons-png.flaticon.com/512/3687/3687412.png';
    deleteImg.setAttribute('width', `${width}px`);
    return deleteImg;
}

function generateParagraph(className) {
    const paraElem = document.createElement('p');
    paraElem.className = className;
    return paraElem;
}

function generateCheckbox(className, checked = false) {
    const checkboxElem = document.createElement('input');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.className = className;
    checkboxElem.checked = checked;
    return checkboxElem;
}

function generateTextInput(className, placeholder = '', value = '') {
    const textInputElem = document.createElement('input');
    // textInputElem.setAttribute('type', 'text');
    textInputElem.className = className;
    textInputElem.setAttribute('placeholder', placeholder);
    textInputElem.setAttribute('value', value);
    return textInputElem;
}

function appendChildren(elem, children) {
    children.forEach((child) => {
        elem.appendChild(child);
    });
}