// user input form
const form = document.querySelector("form")
form.addEventListener("submit", addTask)

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
    // get element from DO
    taskList.appendChild(li)
    //clear form input value
    document.querySelector("#Task").value = ""
    event.preventDefault()


    console.log(taskList)

    }
