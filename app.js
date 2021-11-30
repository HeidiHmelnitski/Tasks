// user input form
const form = document.querySelector("form")
form.addEventListener("submit", addTask)

//tasklist
const tasklist = document.querySelector("ul")
tasklist.addEventListener("click", delTask)

//delete button
const deletebtn = document.querySelector("#delete-tasks")
deletebtn.addEventListener( "click" , delTasks)

function delTasks () {
//    tasklist.innerHTML = ""
    while (tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild)
    }
}

//delTask
function delTask(event) {
    if (event.target.textContent === "X") {
        if(confirm("jnejnej")){
            event.target.parentElement.remove()

         console.log(event.target)
        }
    }
}

// add task funktsion
function addTask (event) {
    console.log(event.type)
    //get task value from form input
    const task = document.querySelector("#Task").value
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
    link.appendChild(document.createTextNode("X"))
    link.setAttribute("href", "a")
    li.appendChild(link)


    // get element from DO
    taskList.appendChild(li)
    //clear form input value
    document.querySelector("#Task").value = ""
    event.preventDefault()


    console.log(taskList)

    }
