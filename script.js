let colors = ["#24d05a", "#eb4888", "#10a2f5", "#e9bc3f"];
function getRandomColour() {
    return Math.floor(Math.random() * colors.length);
}
const links = document.querySelectorAll("a");
document.addEventListener("mouseover", (e) => {
    if (e.target.tagName == "A") {
        links.forEach((item) => {
            item.style.cssText = `text-decoration-color:${colors[getRandomColour()]}`;
        });
    }
});

