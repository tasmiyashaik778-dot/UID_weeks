// PAGE NAVIGATION FUNCTION
function showPage(pageId){
    let pages = document.querySelectorAll(".page");
    pages.forEach(function(page){
        page.classList.remove("active");
    });
    document.getElementById(pageId).classList.add("active");
}

// ADD TASK FEATURE
const addButton = document.querySelector(".add-btn");

addButton.addEventListener("click", function () {
    let taskName = prompt("Enter task name");

    if(taskName === null || taskName.trim() === ""){
        return;
    }

    let taskType = prompt(
        "Enter task type:\nHabit\nDaily\nTodo"
    );

    if(taskType === null || taskType.trim() === ""){
        return;
    }

    // Converts input to lowercase and strips out spaces/apostrophes
    taskType = taskType.toLowerCase().replace(/[\s']/g, "");

    let column;

    // SELECT COLUMN
    if(taskType === "habit"){
        column = document.querySelectorAll(".column")[0];
    }
    else if(taskType === "daily"){
        column = document.querySelectorAll(".column")[1];
    }
    else if(taskType === "todo" || taskType === "todos"){ 
        column = document.querySelectorAll(".column")[2];
    }
    else{
        alert("Invalid type! Please type: Habit, Daily, or Todo.");
        return;
    }

    // CREATE TASK ELEMENT
    let task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `
        <div class="task-header">
            ${taskName}
        </div>
        <div class="task-content">
            <div class="circle complete-btn">✓</div>
            <div>
                <h3>${taskName}</h3>
                <p>New user task</p>
            </div>
        </div>
    `;

    // ADD TASK TO THE SELECTED COLUMN
    column.appendChild(task);

    // COMPLETE TASK STRUT
    let completeButton = task.querySelector(".complete-btn");
    completeButton.addEventListener("click", function(){
        task.style.opacity = "0.5";
        task.style.textDecoration = "line-through";
    });
});

// SEARCH FEATURE
const searchInput = document.querySelector(".search-section input");

searchInput.addEventListener("keyup", function(){
    let value = searchInput.value.toLowerCase();
    let tasks = document.querySelectorAll(".task");

    tasks.forEach(function(task){
        let text = task.innerText.toLowerCase();
        if(text.includes(value)){
            task.style.display = "block";
        }
        else{
            task.style.display = "none";
        }
    });
});

// LOGOUT FUNCTION
function logout(){
    alert("You have logged out!");
    window.location.href = "login.html";
}