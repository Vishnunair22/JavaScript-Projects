const todoItem = document.querySelector('input');
const add = document.querySelector('.add');
const remove = document.querySelector('.remove');
const ul = document.querySelector('.todo-list');

add.addEventListener('click', function(e) {
    e.preventDefault();
    const itemValue = todoItem.value; // Get the value inside the event listener
    if (itemValue !== '') { // Check if the input is not empty
        const li = document.createElement('li');
        li.setAttribute('class','list-item');
        li.innerHTML = itemValue;
        ul.append(li);
        todoItem.value = ''; // Clear the input's value
    }
});
remove.addEventListener('click',function(e){
    e.preventDefault();
    const lastItem = ul.querySelector('li:last-child'); // Select the last list item
    if (lastItem) { // Check if there is an item to remove
        ul.removeChild(lastItem); // Remove the last item
    }
});