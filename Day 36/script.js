function saveUsername() {
    const name = document.getElementById("usernameInput").value;
    if (name) {
        localStorage.setItem("username", name);
        alert("Username saved successfully!");
    } else {
        alert("Please enter a name before saving.");
    }
}

function showUsername() {
    const storedName = localStorage.getItem("username");
    const greetingElement = document.getElementById("greeting");

    if (storedName) {
        greetingElement.textContent = `Welcome back, ${storedName}!`;
    } else {
        greetingElement.textContent = "No username found in storage.";
    }
}
