// Login Form Logic
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    try {
        const username = document.getElementById("username-input").value;
        const password = document.getElementById("password-input").value;

        if (username === "" || password === "") {
            throw new Error("Please enter both username and password");
        }

        // Retrieve stored credentials from localStorage (parse the JSON string)
        const storedCredentials = JSON.parse(localStorage.getItem("credentials")) || [];

        // Check if the entered credentials match any stored credentials
        const userExists = storedCredentials.find(
            user => user.username === username && user.password === password
        );

        if (!userExists) {
            throw new Error("Invalid username or password");
        }

        // If login is successful, redirect to landing page
        window.location.href = "../Home/home.html";
    } catch (error) {
        const errorMessageElement = document.getElementById("error-message");
        errorMessageElement.textContent = error.message;
    }
});

// Register Form Logic
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const registerUsername = document.getElementById("register-username").value;
    const registerPassword = document.getElementById("register-password").value;

    if (registerUsername === "" || registerPassword === "") {
        alert("Please fill in both fields.");
        return;
    }

    // Retrieve existing credentials from localStorage, or initialize an empty array
    const storedCredentials = JSON.parse(localStorage.getItem("credentials")) || [];

    // Check if the username already exists
    const userExists = storedCredentials.some(user => user.username === registerUsername);

    if (userExists) {
        alert("Username already exists. Please choose a different one.");
        return;
    }

    // Add the new user to the credentials array
    storedCredentials.push({ username: registerUsername, password: registerPassword });

    // Save the updated credentials array back to localStorage
    localStorage.setItem("credentials", JSON.stringify(storedCredentials));

    alert("Registration successful! You can now log in.");
    document.getElementById("registerForm").style.display = "none";
});

// Toggle between login and register forms
document.getElementById("register-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("registerForm").style.display = "block";
});
