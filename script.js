// ASI: Automatic Semicolon Insertion

let starWars = "Yoda"
var student = "Zahra"
const age = 22

// variablen um die HTML Komponenten zu fangen und zu manipulieren
let todolistInputField = document.getElementById("todoInputField")
let todolistSubmitButton = document.getElementById("addButton")
let todolistBody = document.getElementById("todosList")

function addTodo() {
    // alert("Hurray, just triggered your first Event with Click!");
    let todoInputValue = todolistInputField.value.trim()

    if (todoInputValue !== "") {
        let textNode = document.createTextNode(todoInputValue)

        // alert(todoInputValue);
        let newTodoBody = document.createElement("li")

        newTodoBody.classList.add("list-group-item")
        // adding a delete button
        let deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete Todo"
        // add event to the button with click
        deleteButton.onclick = function () {

            confetti({
                //confetti Einstellungen werden hier geschrieben
            })

            // delete the parent of the button which is the LI in newTodoBody
            this.parentElement.remove()
        }

        newTodoBody.appendChild(textNode)
        newTodoBody.appendChild(deleteButton)

        todolistBody.appendChild(newTodoBody)

        confetti({
            // Confetti Einstellungen werden hier geschrieben
        })

        todolistInputField.value = ""
    }
}

todolistSubmitButton.addEventListener("click", () => {
    addTodo()
})

todolistInputField.addEventListener("keypress", (taste) => {
    if (taste.key === "Enter") {
        addTodo()
    }
})

function HelloWorld() {
    alert("Hello World")
}
//HelloWorld(); //Funktionen muessen zur Arbeit gerufen werden, ansonsten starten sie gar nicht