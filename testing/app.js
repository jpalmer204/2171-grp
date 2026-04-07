function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = new User(username, password);
    const authService = new AuthService();

    const message = document.getElementById("message");

    if (authService.login(user)) {
        message.style.color = "lightgreen";
        message.innerText = "Login Successful!";

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);

    } else {
        message.style.color = "red";
        message.innerText = "Invalid credentials!";
    }
}