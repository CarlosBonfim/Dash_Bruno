var el = document.querySelector(".menu-mobile-icon");

// el.addEventListener("click", () => {
//     //mostrar o menu
//     var menuItems = document.querySelector(".menu-items");
//     if (menuItems.classList.contains("show")) {
//         menuItems.classList.add("hidde");
//         menuItems.classList.remove("show");
//     } else {
//         menuItems.classList.add("show");
//         menuItems.classList.remove("hidde");
//     }
// });

// function myFunction() {'
//     console.log('Teste pra saber se entrou ');
// }

el.addEventListener("click", () => {
    console.log('entrou no evento');
    var menuItems = document.querySelector(".menu-items");
    menuItems.classList.toggle("show");

});