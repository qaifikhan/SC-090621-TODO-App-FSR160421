console.log("Script Loaded!!")

var todoInputBox = document.getElementById("todo-input-box");
var nameHolder = document.getElementById("name-holder");
var todoForm = document.getElementById("todo-form")
var btnAddTodo = document.getElementById("btn-add-todo")
var todoList = document.getElementById("todo-list")

todoForm.addEventListener("submit", function(e) {
    e.preventDefault();
})

todoInputBox.addEventListener("input", function(eventObj) {
    console.log(todoInputBox.value);
})


btnAddTodo.addEventListener("click", function() {
    // <div class="todo-item">Buy Mangoes</div>
    var card = document.createElement("div")
    card.className = "todo-item";
    card.innerHTML = todoInputBox.value;

    todoList.prepend(card);
    todoInputBox.value = "";
})