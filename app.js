const tasks = [];
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        //delete icon
        let span =document.createElement("span");
        span.innerHTML = '<i class="fa-solid fa-trash-can" icon></i>';
        span.addEventListener("click", function(){
            li.remove();
            tasks.splice(tasks.indexOf(taskObj), 1);
            updateStats();
        });

        //AppendChild to li
        listContainer.appendChild(li);
        li.appendChild(span);
        const taskObj = {
            text: inputBox.value,
            completed: false
        };

        tasks.push(taskObj);
        inputBox.value = '';
        updateStats();
        
        //toogle checked class on click
        li.addEventListener('click', function () {
            li.classList.toggle('checked');
            taskObj.completed = !taskObj.completed;
            updateStats(); 
        });
    
        inputBox.value = '';
    }
}

document.getElementById('newTask').addEventListener('click', function (e) {
    e.preventDefault();
    addTask();
});

const updateStats = function() {
    const completeTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    const progress = (completeTasks / totalTasks) * 100;
    const progressBar = document.getElementById("progress");

    progressBar.style.width = `${progress}%`;
    document.getElementById("number").innerHTML = `${completeTasks} / ${totalTasks}`;
};



