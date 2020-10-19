$('.top-menu__link').click(function(params) {
    $('.top-menu').find('.top-menu__link').removeClass('active');
    $(this).addClass('active');
})