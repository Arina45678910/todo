let addMassege = document.querySelector('#taskInput');
let addButton = document.querySelector('#addBtn');
let todo = document.querySelector('#list');
let input = document.querySelector('#input');
let todoList = [];

if (localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'));
    ds();
}

addButton.addEventListener('click', function () {
    let newTodo = {
        todo: addMassege.value,
        checked: false
        

    };

    todoList.push(newTodo)
    ds();
    localStorage.setItem('todo', JSON.stringify(todoList));
    ds();
});
function ds() {
    let ds = '';
    todoList.forEach(function (item, i) {
        ds += `
        <li>
            <input type = 'checkbox' id = 'item_${i}'>
            <label for = 'item_${i}'>${item.todo}</label>
        </li>
        `;
        todo.innerHTML = ds;

    });
}
