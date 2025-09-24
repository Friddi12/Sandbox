const burger =document.getElementById("burger")
const closeBurger = document.getElementById("closeburger")
const menu = document.getElementById("menu")

burger.addEventListener("click", () => {
    menu.classList.add("show")
})

closeBurger.addEventListener("click", () => {
    menu.classList.remove("show")
})