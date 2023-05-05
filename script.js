const addItemButton = document.getElementById('add-item');
const newItemInput = document.getElementById('new-item');
const todoList = document.getElementById('todo-list');
const body = document.querySelector('body')
const trashCan = document.getElementById('trashCan').innerHTML

function addItem() {
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

    const dlt = document.createElement('button');
    dlt.innerHTML = trashCan;
    dlt.classList.add("dltKey")
    dlt.addEventListener('click', () => {
        newItem.style.display = 'none';
    })


    newItem.prepend(checkbox);
    newItem.prepend(dlt);
    todoList.appendChild(newItem);
    newItemInput.value = '';
}

addItemButton.addEventListener('click', addItem);

newItemInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addItem();
    }
});