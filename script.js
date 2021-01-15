// Examining the document object
/*
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = 'Random Title';
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
document.all[10].textContent = 'Hello';
console.log(document.forms);
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);
*/

// getElementByID
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent = 'Hello';
headerTitle.innerText = 'Goodbye';
headerTitle.innerHTML = '<h6>Hello</h6>';

var header = document.getElementById('main-header');
header.style.borderBottom = '3px solid red';

// getElementsByClass
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Item 2 - Updated';
items[2].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'yellow';

// This doesn't work
// items.style.backgroundColor = '#f6f6f6';

// Solve it this way instead
for (var i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = '#f6f6f6';
}

// getElementsByTagName
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent = 'Hello';
headerTitle.innerText = 'Goodbye';
headerTitle.innerHTML = '<h6>Hello</h6>';

var header = document.getElementById('main-header');
header.style.borderBottom = '3px solid red';

// getElementsByClass
var lists = document.getElementsByTagName('li');
console.log(lists);
console.log(lists[2]);
lists[2].textContent = 'Item 3 - Updated';
lists[3].style.fontWeight = 'bold';
lists[3].style.backgroundColor = 'green';

// This doesn't work
// lists.style.backgroundColor = '#E0BA67';

// Solve it this way instead
for (var i = 0; i < lists.length; i++) {
  lists[i].style.backgroundColor = '#E0BA67';
}

// querySelector
var header = document.querySelector('#main-header');
console.log(header);
header.style.borderBottom = '3px solid #34EBCC';

var formControl = document.querySelector('.form-control');
formControl.value = 'Hello World';

// Alternative
// We have two input elements but querySelector selects the first element only
var input = document.querySelector('input');
input.value = 'Hi there!';

var sumbit = document.querySelector('input[type="submit"]');
sumbit.value = 'Send';

var item = document.querySelector('.list-group-item');
// Because the querySelector selects the first item only
item.style.color = 'red'; 

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'green';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'white';

// querySelectorAll
var h2 = document.querySelectorAll('h2');
console.log(h2);
h2[0].textContent = 'Add Items - Updated';

// Alternative 
var titles = document.querySelectorAll('.title');
titles[1].textContent = 'Items - Updated';

var odd = document.querySelectorAll('li:nth-child(odd)');
console.log(odd);
var even = document.querySelectorAll('li:nth-child(even)');
console.log(even);

for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = '#f4f4f4';
  even[i].style.backgroundColor = '#ccc';
}


