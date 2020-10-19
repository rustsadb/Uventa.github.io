//КНОПКА БУРГЕРА И БУРГЕР-МЕНЮ
$(document).ready(function(){
    $('.burger-icon').click(function(event){
        $('.burger-icon,.top-menu__list_sections').toggleClass('active');
        $('body').toggleClass('lock');
        $('.wrapper').toggleClass('shadow');
    })
    $('.menu__link').click(function(event){
        $('.burger-menu,.top-menu__list_sections').removeClass('active');
        $('body').removeClass('lock');
    })
})