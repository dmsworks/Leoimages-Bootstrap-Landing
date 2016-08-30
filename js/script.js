$( document ).ready(function() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#menu-top').attr('id', 'menu-top-dark');
           }
         if ($(this).scrollTop() < 50) {
            $('#menu-top-dark').attr('id', 'menu-top');
           }
    });
});