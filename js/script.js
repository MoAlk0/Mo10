function changeBackground() {
const colors = ["#334143ff", "#d4cf9dff", "#c39496ff", "#be9dd1ff", "#1c610eff"];
const random = Math.floor(Math.random() * colors.length);
document.body.style.backgroundColor = colors[random];
document.querySelector("button").style.color = colors[random];
}
