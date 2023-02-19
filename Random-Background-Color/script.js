const button = document.getElementById("button");

button.addEventListener("click", function onClick() {
    let color = '#';
    color += random = Math.random().toString(16).slice(2,8);
    document.body.style.backgroundColor = color;
})