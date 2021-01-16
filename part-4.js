var form = document.getElementById('addForm');
var items = document.getElementById('items');
var filter = document.getElementById('filter');

// Add an item
function addItem(event) {
  event.preventDefault();
  // Get the value of the input field
  var input = document.getElementById('input');
  var inputValue = input.value;
  // Create new li element
  var newList = document.createElement('li');
  // Add similar class to this newly made li element
  newList.className = 'list-group-item';
  // Insert the value of the input field inside the li element
  var innerText = document.createTextNode(inputValue);
  newList.appendChild(innerText);
  // This creates a button element
  var deleteBtn = document.createElement('button');
  // This adds the class that matches with rest of the buttons
  deleteBtn.className = 'btn btn-info btn-sm float-right delete';
  // This creates a text to be used inside the button element
  var btnText = document.createTextNode('X');
  // This adds the newly created text inside the button element
  deleteBtn.appendChild(btnText);
  // This adds the button element inside the list element
  newList.appendChild(deleteBtn);
  // Insert this new list inside the ul element
  items.appendChild(newList);
}

form.addEventListener('submit', addItem);

// Delete an item
function deleteItem(event) {
  if (event.target.classList.contains('delete')) {
    // console.log(confirm('Are you sure?'));
    if (confirm('Are you sure?')) {
      var list = event.target.parentElement;
      items.removeChild(list);
    }
  }
}

items.addEventListener('click', deleteItem);

// Filter items
function filterItems(event) {
  var textInput = event.target.value.toLowerCase();
  var itemLists = items.getElementsByTagName('li');
  // Convert HTMLCollection to an array
  var itemListsArray = Array.from(itemLists);
  itemListsArray.forEach(function(item) {
    var itemName = item.firstChild.textContent;
    // console.log(itemName.toLowerCase().indexOf(textInput) !== -1);
    if (itemName.toLowerCase().indexOf(textInput) !== -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
}

filter.addEventListener('keyup', filterItems);