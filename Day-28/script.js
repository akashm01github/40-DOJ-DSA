let btn = document.querySelector('.btn');

let input = document.querySelector('input');


let todosList = document.querySelector('.todosList');



let todos = [];


if(localStorage.getItem('todos')){
    todos = JSON.parse(localStorage.getItem('todos'))
}


function showTodos() {
    todosList.innerHTML = "";
    todos.forEach(function (elem, index) {
        let tasks = `  <div class="tasks">
                <li>${elem}</li>
                <button class="delete-btn">Delete</button>
            </div>`

        let finalTask = document.createElement('div');

        finalTask.innerHTML = tasks;

        todosList.append(finalTask);


        finalTask.querySelector('.delete-btn').addEventListener('click', function () {
            todos.splice(index,1);
            updateTodos();
            showTodos();
        })
    })


}



function updateTodos(){
    localStorage.setItem('todos',JSON.stringify(todos));
}





btn.addEventListener('click', function () {

    todos.push(input.value);
    input.value = "";
    updateTodos();
    showTodos();

})
