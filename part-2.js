// Traversing the DOM
var itemList = document.querySelector('#items');
console.log(itemList);

// parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f8f8f8';
console.log(itemList.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);

// parentElement (It's same as parentNode)
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#h6h6h6';
console.log(itemList.parentElement.parentElement);
console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// It prints 9 instead of 4 because it also includes the line breaks
console.log(itemList.childNodes);

// children 
// Therefore, it's better to use this property
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = '#eab676';

// firstChild
// It also works like childNodes
console.log(itemList.firstChild);

// firstElementChild
// Therefore, it's better to use this property
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Item 1 - Updated';

// lastChild
// It also works like childNodes
console.log(itemList.lastChild);

// lastElementChild
// Therefore, it's better to use this property
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Item 4 - Updated';

// nextSibling
// It also works like childNodes
console.log(itemList.nextSibling);

// nextElementSibling
// Therefore, it's better to use this property
// This returns null because we don't have next sibling
console.log(itemList.nextElementSibling); 

// previousSibling
// It also works like childNodes
console.log(itemList.previousSibling);

// previousElementSibling
// Therefore, it's better to use this property
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

// createElement
// creating a div element
var newDiv = document.createElement('div');
newDiv.id = 'toggle';
newDiv.className = 'toggle';
newDiv.setAttribute('title', 'Hello World');
console.log(newDiv);

// createTextNode
var newDivText = document.createTextNode('Hi! I\'m Niraj');
console.log(newDivText);
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
// This is the first div element inside the header element
console.log(container);
var h1 = document.querySelector('header h1');
console.log(h1);

// This inserts newDiv before h1 in container
container.insertBefore(newDiv, h1);
newDiv.style.fontSize = '1rem'; 