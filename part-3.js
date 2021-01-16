// Events and EventListeners

/**************** Mouse Events ****************/
var button = document.getElementById('button');
console.log(button);
/*
button.addEventListener('click', function() {
  console.log('Button Clicked!');
});
*/

// Alternative
function buttonClick() {
  // console.log('Button Clicked!');
  var headerTitle = document.getElementById('header-title');
  headerTitle.textContent = 'New Item Lists';
  var cardBody = document.getElementById('main');
  cardBody.style.backgroundColor = '#eab676';
}

button.addEventListener('click', buttonClick);

function mouseClick(event) {
  // It logs MouseEvent object
  console.log(event);
  console.log(event.target);
  console.log(event.target.id); // button
  console.log(event.target.className);
  console.log(event.target.classList);
  var newDiv = document.createElement('div');
  newDiv.textContent = 'New text is ' + event.target.id + '.';
  newDiv.innerHTML = '<h3>' + event.target.id + '</h3>';
  console.log(newDiv);
  console.log(event.type);
  // It's the position measured from the browser window, not the button itself
  console.log(event.clientX);
  // To measure from the button itself, do this instead
  console.log(event.offsetX);
  console.log(event.clientY);
  console.log(event.offsetY);
  // This is option key in Mac
  console.log(event.altKey);
  // This doesn't work in Mac
  console.log(event.ctrlKey);
  console.log(event.shiftKey);
}

button.addEventListener('click', mouseClick);

function anotherButtonClick(event) {
  console.log(event.type);
}

button.addEventListener('click', anotherButtonClick);
button.addEventListener('dblclick', anotherButtonClick);
button.addEventListener('mousedown', anotherButtonClick);
button.addEventListener('mouseup', anotherButtonClick);

var box = document.getElementById('box');
console.log(box);

function boxEvent(event) {
  console.log(event.type);
}

box.addEventListener('mouseenter', boxEvent);
box.addEventListener('mouseleave', boxEvent);
// This one works for the inner element (<h3> in our case)
box.addEventListener('mouseover', boxEvent);
// This one also works for the inner element (<h3> in our case)
box.addEventListener('mouseout', boxEvent);

function anotherBoxEvent(event) {
  // box.textContent = 'Mouse X: ' + event.offsetX;
  // box.style.backgroundColor = 'rgb(' + event.offsetX + ', ' + event.offsetY + ', ' + '40)';
  document.body.style.backgroundColor = 'rgb(' + event.offsetX + ', ' + event.offsetY + ', ' + '40)';
}

box.addEventListener('mousemove', anotherBoxEvent);

/**************** Keyboard Events ****************/
var itemInput = document.querySelector('input[type="text"]');
console.log(itemInput);

function inputEvent(event) {
  // console.log('Working');
  console.log(event.type);
  console.log(event.target);
  console.log(event.target.value);
  box.textContent = event.target.value;
}

// It gets executed when we release the key
itemInput.addEventListener('keyup', inputEvent);
// It gets executed when we press/type down the key
itemInput.addEventListener('keydown', inputEvent);
itemInput.addEventListener('keypress', inputEvent);

/**************** Focus Events ****************/
itemInput.addEventListener('focus', inputEvent);
itemInput.addEventListener('blur', inputEvent);

/**************** Clipboard Events ****************/
itemInput.addEventListener('cut', inputEvent);
itemInput.addEventListener('copy', inputEvent);
itemInput.addEventListener('paste', inputEvent);

/**************** Value Change Events ****************/
itemInput.addEventListener('input', inputEvent);

/**************** Storage Events ****************/
var select = document.querySelector('select');
console.log(select);

function selectEvent(event) {
  console.log(event.type);
  console.log(event.target);
  console.log(event.target.value);
}
select.addEventListener('change', selectEvent);

/**************** Form Events ****************/
var form = document.querySelector('form');
console.log(form);

function formEvent(event) {
  event.preventDefault();
  console.log(event.type);
  console.log(event.target);
}

// It gets executed when we submit a form
form.addEventListener('submit', formEvent);