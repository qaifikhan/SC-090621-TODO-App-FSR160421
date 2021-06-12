console.log("Script Loaded!!")

var todoInputBox = document.getElementById("todo-input-box");
var nameHolder = document.getElementById("name-holder");
var todoForm = document.getElementById("todo-form")
var btnAddTodo = document.getElementById("btn-add-todo")
var todoList = document.getElementById("todo-list")

todoForm.addEventListener("submit", function(e) {
    e.preventDefault();
})

btnAddTodo.addEventListener("click", function() {
    if(todoInputBox.value === "") {
        alert("Please enter the TODO item");
        return;
    }
    // <div class="todo-item">
    //     <div>
    //         <h3>Buy Mangoes</h3>
    //         <p>11-06-2021 20:05:23</p>
    //     </div>
    //     <i class="fas fa-trash"></i>
    // </div>
    var card = document.createElement("div") //<div></div>
    card.className = "todo-item"; //<div class="todo-item"></div>

    var todoMetaWrapper = document.createElement("div");
    var heading = document.createElement("h3");
    heading.innerHTML = todoInputBox.value;
    var paragraph = document.createElement("p");
    var currentDate = new Date();
    paragraph.innerHTML = currentDate.getDate() + "-" + (parseInt(currentDate.getMonth()) + 1) + "-" + currentDate.getFullYear() + " " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    todoMetaWrapper.appendChild(heading);
    todoMetaWrapper.appendChild(paragraph);
    card.appendChild(todoMetaWrapper);

    var deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-trash";
    deleteIcon.addEventListener("click", function() {
        card.remove();
    })
    card.appendChild(deleteIcon);

    todoList.prepend(card);
    todoInputBox.value = "";
})


// var mouseDemo = document.getElementById("mouse-demo");

// mouseDemo.addEventListener("click", function(e) {
//     console.log("Menu Enter")
//     console.log(e)
// })

// mouseDemo.addEventListener("mouseenter", function(e) {
//     console.log("Menu Enter")
// })

// mouseDemo.addEventListener("mousemove", function(e) {
//     console.log("Menu Move")
// })

// mouseDemo.addEventListener("mouseleave", function(e) {
//     console.log("Menu Leave")
// })



function getSum(num1, num2) {
    console.log(num1 + num2);
}

getSum(10, 20);
// function getSum(10, 20) {
//     console.log(10 + 20);
// }
getSum(100, 200);
// function getSum(100, 200) {
//     console.log(100 + 200);
// }
