let input = document.querySelector('input');

let addTask = document.querySelector('.add_task');


let todo_list = document.querySelector('.todo_list');

let todos = [];


if(localStorage.getItem('todos')){
    todos = JSON.parse(localStorage.getItem('todos'));
    showTodos();
}


function showTodos() {
    todo_list.innerHTML = ''
    todos.forEach(function (task,index) {
        let taskList = ` <div class="todos">
                    <h3>${task}</h3>
                    <i class="ri-delete-bin-line dlt_btn"></i>
                </div>`

        let final = document.createElement('div');
        final.classList.add('todos')
        final.innerHTML = taskList
        todo_list.appendChild(final);


         final.querySelector('.dlt_btn').addEventListener('click',()=>{
            todos.splice(index,1)
            showTodos();
            updateTodos();
        })
    })


   

    

}


function updateTodos(){
    localStorage.setItem('todos',JSON.stringify(todos));
}

addTask.addEventListener('click', function () {
    todos.push(input.value);
    input.innerHTML = '';
    showTodos();
    updateTodos();
})