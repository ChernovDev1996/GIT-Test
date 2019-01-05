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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5hdmJhclxyXG4vLyB2YXIgYnVyZ2VySWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXItYnVyZ2VyJyk7XHJcblxyXG4vLyB2YXIgbmF2YmFyTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXItbWVudScpO1xyXG5cclxuLy8gYnVyZ2VySWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbi8vIH0pO1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBidXJnZXJJY29uID0gJCgnLm5hdmJhci1idXJnZXInKTtcclxuXHJcbiAgICB2YXIgbmF2YmFyTWVudSA9ICQoJy5uYXZiYXItbWVudScpO1xyXG5cclxuICAgIGJ1cmdlckljb24uY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBuYXZiYXJNZW51LnNsaWRlVG9nZ2xlKCkuY3NzKHsgJ2Rpc3BsYXknOiAnZmxleCcgfSk7XHJcbiAgICB9KTtcclxufSkiXSwiZmlsZSI6Im1haW4uanMifQ==
