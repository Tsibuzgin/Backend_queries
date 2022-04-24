//Блок бургер меню в панели навигации
const toggler = document.querySelector(".fa-solid");
const links = document.querySelector(".links");
toggler.addEventListener("click", () => {
    if (links.classList.contains("open")) {
        links.classList.remove("open");
    } else {
        links.classList.add("open");
    }
});

// const but = document.querySelector(".nav-link");
// but.addEventListener("click", () => {
//     console.log("check");
// });