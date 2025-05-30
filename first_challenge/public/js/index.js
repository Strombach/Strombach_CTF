let loginForm = document.querySelector("#login-form");
let messageP = document.querySelector("#message");

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    let test = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: loginForm.username.value,
            password: loginForm.password.value,
        }),
    });

    let data = await test.json();
    console.log(data);

    if (data.message === "Login Successful") {
        messageP.classList.add("success");
    } else {
        messageP.classList.add("error");
    }

    messageP.textContent = data.message;

    setTimeout(() => {
        messageP.textContent = "";
    }, 5000);
});
