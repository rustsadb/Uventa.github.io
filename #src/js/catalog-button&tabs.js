//РАБОТА КНОПКИ КАТАЛОГА
$('.catalog-button').click(function(event){
    $('.catalog-button,.tab-buttons,.tab-body,.catalog-panel').toggleClass('active');
    $('.wrapper').toggleClass('shadow');

    //КОРРЕКТИРОВКА ТАБ КНОПОК И ТАБОВ В ФИКСИРОВАННОМ МЕНЮ
    if($('.catalog-button').hasClass('active')){
        $('.tab-buttons').addClass('moved');
        $('.tab-menu').addClass('moved');
    }
}),

//СБРОС ПЕРЕХОДА ПО ССЫЛКЕ НА ТАБ-КНОПКЕ
$('.tab-buttons__btn').click(function(event){
    event.preventDefault();
})
//ТАБЫ
$(".tab-content").not(":first").hide();
$(".tab-buttons__btn").click(function() {
    $(".tab-buttons .tab-buttons__btn").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab-content").hide().eq($(this).index()).fadeIn();
}).eq(0).addClass("active");
