$(document).ready(function () {
    $(window).scroll(function () {

        // declare variable
        var topPos = $(this).scrollTop();
        var curPos = $('#background-dark').height();
        console.log(topPos, curPos);
        // if user scrolls down - show scroll to top button
        if (curPos - topPos < 0) {
            $('nav').removeClass('navbar-dark bg-dark');
            $('nav').addClass('navbar-light bg-light');
        } else {
            $('nav').removeClass('navbar-light bg-light');
            $('nav').addClass('navbar-dark bg-dark');
        }

    }); // scroll END
})