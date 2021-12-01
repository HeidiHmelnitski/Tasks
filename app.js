// user input form
const form = document.querySelector("form")
form.addEventListener("submit", addTask)

//tasklist
const tasklist = document.querySelector("ul")
tasklist.addEventListener("click", delTask)

//delete button
const deletebtn = document.querySelector("#delete-tasks")
deletebtn.addEventListener( "click" , delTasks)

//pageReload
document.addEventListener("DOMContentLoad", getTasks)

//getTask
function getTasks(){
    let tasks
    if (localStorage.getItem("tasks") === null) {
        task = []
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }

    //for each task in tasks - create li and add to tasklist
    task.forEach(function (taskFromLS) {
        const li = document.createElement("li")
        // get element from DOM
        li.className = "collection-item"
        // get element from DOM
        const text = document.createTextNode(taskFromLS)
        // get element from DOM
        li.appendChild(text)
        const link= document.createElement("a")
        link.className ="secondary-content"
        link.appendChild(document.createTextNode("X"))
        link.setAttribute("href", "a")
        li.appendChild(link)


        // get element from DO
        taskList.appendChild(li)
    })
}


function delTasks () {
//    tasklist.innerHTML = ""
    while (tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }
    removeAllStorage()
}

//removeallstorage
function removeAllStorage(){
    localStorage.removeItem("tasks")
}

//delTask
function delTask(event) {
    if (event.target.textContent === "X") {
        if(confirm("jnejnej")){
            event.target.parentElement.remove();
        }
    }
}
//removeStorage
function removeStorage(task) {
    let tasks
    if (localStorage.getItem("tasks") === null) {
        task = []
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }
    task.forEach(function (taskFromLs, taskIndex) {
        if (taskFromLs === task) {
            tasks.splice(taskIndex, 1)
        }
    })
    localStorage.setItem("tasks", JSON.stringify(tasks))
}



// add task function
function addTask (event) {
    //get task value from form input
    const taskInput = document.querySelector("#Task").value
    // get element from DOM
    const taskList = document.querySelector("ul")
    // get element from DOM
    const li = document.createElement("li")
    // get element from DOM
    li.className = "collection-item"
    // get element from DOM
    const text = document.createTextNode(task)
    // get element from DOM
    li.appendChild(text)
    const link= document.createElement("a")
    link.className ="secondary-content"
    link.setAttribute("href", "#")
    link.appendChild(document.createTextNode("X"))
    li.appendChild(link);
    const ul = document.querySelector(".collection");
    ul.appendChild(li);
    saveTask(task);
    taskInput.value = "";
    event.preventDefault();

    function saveTask(task) {
        let tasks;
        tasks = [];
        tasks.push(task);

    }




    // get element from DO
    taskList.appendChild(li)
    //clear form input value
    document.querySelector("#Task").value = ""
    event.preventDefault()


    console.log(taskList)

    }
