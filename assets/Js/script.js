$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').css('backgroundColor', '#000000')
        } else {
            $('.navbar').css('backgroundColor', 'transparent')
        }
    });
});