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

//Блок удаления пользователя

const del_but = document.querySelector(".dropdown-item");
const user = document.querySelector(".row-2");
del_but.addEventListener("click", () => {
    user.classList.add("hide");
});

const del_but_2 = document.querySelector(".test_dropdown-item");
const user_2 = document.querySelector(".row-3");
del_but_2.addEventListener("click", () => {
    user_2.classList.add("hide");
});

//Блок запроса в базу пользователей

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    };
    rawFile.send(null);
}

// calling above function (+вывод данных в меню)
readTextFile('../js/response_1651130785854.json', function(text){
    var data = JSON.parse(text); //parse JSON
    console.log(data[0]);
    document.querySelector('.test_id').textContent = data[0].id;
    document.querySelector('.test_name').textContent = data[0].user_name;
    document.querySelector('.test_email').textContent = data[0].email;
    document.querySelector('.test_password').textContent = data[0].password;
    document.querySelector('.test_status').textContent = data[0].status;
});