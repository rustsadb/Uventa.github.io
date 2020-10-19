//СЛАЙДЕР
$('.slider-small__slide').click(function(params) {
    $('.slider-small .slider-small__slide').removeClass('active');
    $('.slider-big .slider-big__image').hide()
    let imageSource = $(this).children('.slider-small__image').attr("src");
    $('.slider-big .slider-big__image').attr("src", imageSource).fadeIn();
    $(this).addClass('active');
})