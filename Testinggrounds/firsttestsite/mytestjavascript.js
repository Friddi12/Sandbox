const button = document.getElementById("colorSwap");
const mytext = document.getElementById("mytext")
const myheader = document.getElementById("myheader")

let isBlack = true;
let clicked = false;

button.addEventListener("click", function() {
    if (clicked) {
        button.textContent = "Light";

    } else {
        button.textContent = "Dark";
    }
    clicked = !clicked;
})

button.addEventListener("click", () => {
    if (isBlack) {
        document.body.style.backgroundColor = "white";
        document.body.style.Color = "black";
        mytext.style.color = "black";
        myheader.style.color = "silver";
        isBlack = false;
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.Color = "white";
        mytext.style.color = "white";
        myheader.style.color = "white";
        isBlack = true;
    }
})

button.style.position = "absolute"
button.style.left = "620px"
button.style.bottom = "100px"