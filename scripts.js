document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for validation
    let isValid = true;

    // Clear previous error messages
    document.getElementById("username-error").style.display = "none";
    document.getElementById("password-error").style.display = "none";
    document.getElementById("general-error").style.display = "none";

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Username validation
    if (username === "") {
        document.getElementById("username-error").style.display = "block";
        isValid = false;
    }

    // Password validation
    if (password === "") {
        document.getElementById("password-error").style.display = "block";
        isValid = false;
    }

    // General error handling if any fields are invalid
    if (!isValid) {
        document.getElementById("general-error").style.display = "block";
        document.getElementById("general-error").innerText = "Please fill in the required fields.";
        return;
    }

    // If valid, simulate a successful login (or continue with actual login logic)
    alert("Login successful!");
});
