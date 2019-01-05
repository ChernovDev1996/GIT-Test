// Navbar
// var burgerIcon = document.getElementById('navbar-burger');

// var navbarMenu = document.getElementById('navbar-menu');

// burgerIcon.addEventListener('click', function () {
//     navbarMenu.classList.toggle('active');
// });


$(document).ready(function () {
    var burgerIcon = $('.navbar-burger');

    var navbarMenu = $('.navbar-menu');

    burgerIcon.click(function () {

        navbarMenu.slideToggle().css({ 'display': 'flex' });
    });
})
