// create Elements in the body
const container = document.createElement('div');
const title = document.createElement('h1');
const textarea = document.createElement('textarea');
const keyboardContainer = document.createElement('div');

// append all of the elements
document.body.appendChild(container);
container.appendChild(title);
container.appendChild(textarea);
container.appendChild(keyboardContainer);

// add class names
container.classList.add('container');
title.classList.add('title');
textarea.classList.add('textarea');
keyboardContainer.classList.add('keyboard');

// add the title 
title.innerHTML = "RSS Виртуальная клавиатура";





