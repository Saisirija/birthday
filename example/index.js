// Typing Effect
const text = "Hie Shashank 🥱";
let index = 0;
function typeText() {
    if (index < text.length) {
        document.getElementById("birthday-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}
window.onload = typeText;
