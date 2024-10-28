
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
        if (inputBox.value.trim() === '') {
            alert("You must write something!");
        } else {
            let li = document.createElement("li");
            li.textContent = inputBox.value;

            let span = document.createElement("span");
            span.textContent = " ×"; // Close button
            span.style.cursor = "pointer"; // Add cursor style
            li.appendChild(span);
            listContainer.appendChild(li);

            inputBox.value = ""; // Clear input
            saveTasks(); // Save tasks to local storage
        }
    }

    listContainer.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveTasks(); // Save state after toggling
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveTasks(); // Save tasks after removal
        }
    });

function saveTasks() {
        localStorage.setItem("tasks", listContainer.innerHTML);
    }

function loadTasks() {
        listContainer.innerHTML = localStorage.getItem("tasks") || "";
    }

function Register() {
        const username = document.getElementById("Username").value.trim();
        const password = document.getElementById("Password").value.trim();

        if (!username || !password) {
            alert("You must type something in both fields.");
            return;
        }

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert("Registration successful!");

        // Clear inputs
        document.getElementById("Username").value = "";
        document.getElementById("Password").value = "";
    }

function Login() {
        const username = document.getElementById("Username").value.trim();
        const password = document.getElementById("Password").value.trim();

        if (!username || !password) {
            alert("You must type something in both fields.");
            return;
        }

        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");

        if (username === storedUsername && password === storedPassword) {
            alert("Login successful!");
            loadTasks(); // Load tasks upon successful login
        } else {
            alert("Invalid username or password.");
        }
    }
