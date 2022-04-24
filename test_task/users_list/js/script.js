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

$(function () {
    $(document).ready(getUsers());
    function getUsers() {
        $.ajax({
            type: "GET", // если в доке POST, замени на него
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            url: 'https://zentesting.herokuapp.com/show_users/', //свою ссылку поставишь
            success: function (data) {
                console.log(data);
            }
        });
    }
});