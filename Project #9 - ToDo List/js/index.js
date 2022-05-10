const createTask = (taskName) => {

    if(taskName === ""){

        return alert("Insert a valid name");

    }

    //Elements
    const todo = document.getElementById('todo');
    const input = document.getElementById('tarefa');
    const done = document.getElementById('done');

    //Div
    const div = document.createElement('div');
    div.classList.add('task');

    //Event Listener
    div.addEventListener('click', e => {

        done.appendChild(e.currentTarget);

    }); 

    //P
    const p = document.createElement('p');
    p.innerHTML = taskName;

    // Button
    const icon = document.createElement('i');
    icon.style.border = 'none';
    icon.classList.add('fa-solid', 'fa-trash-can', 'fa-lg', 'remove-button');

    icon.addEventListener('click', e => {

        e.currentTarget.parentElement.style.display = 'none';

    });

    //Append
    div.appendChild(p);
    div.appendChild(icon);
    todo.appendChild(div); //Insert task to the body

    //Clear input value
    input.value = "";

}