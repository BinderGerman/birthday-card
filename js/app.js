let formulario = document.querySelector("form");
let password = document.querySelector("#pass");
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    if(password.value === "otibebe") {
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScL3v8ws1m33cp4w-LUoBF9_ALGLbe8N8J1hyIfn4_0nkeWGA/viewform?usp=sf_link";
    } else {
        alert("Intenta nuevamente: clave incorrecta")
    }
})