const addItemButton = document.getElementById('add-item');
const newItemInput = document.getElementById('new-item');
const todoList = document.getElementById('todo-list');
const body = document.querySelector('body')

addItemButton.addEventListener('click', () => {
    const newItemText = newItemInput.value;
    const newItem = document.createElement('li');
    newItem.innerText = newItemText;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            newItem.style.textDecoration = 'line-through';
            newItem.style.color = 'gray'
        } else {
            newItem.style.textDecoration = 'none';
            newItem.style.color = body.style.color;
        }
    });
    newItem.prepend(checkbox);
    todoList.appendChild(newItem);
    newItemInput.value = '';
});