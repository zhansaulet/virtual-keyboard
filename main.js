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







// document.body
//   .appendChild(
//     Object.assign(
//       document.createElement('div'),
//       { className: 'container' }
//     )
//   ).appendChild(
//     Object.assign(
//       document.createElement('h1'),
//       {
//         className: 'title',
//         innerHTML: 'RSS Виртуальная клавиатура'
//       }
//     )
//   ).appendChild(
//     Object.assign(
//       document.createElement('textarea'), {
//       className: 'textarea'
//     }
//     )
//   ).appendChild(
//     Object.assign(
//       document.createElement('div'), {
//       className: 'keyboard'
//     }
//     )
//   );