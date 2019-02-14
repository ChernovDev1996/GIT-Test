$(document).ready(function () {

    $('.wrapHiddenNav').hide();

    $('.mainMenuBurger').click(function (e) {
        $('.wrapHiddenNav').slideToggle(500);
        e.preventDefault();
    })



})