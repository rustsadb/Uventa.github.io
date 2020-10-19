const animItem = $('.anim-item');
const topRow = $('.top-row');
const hiddenBlock = $('.hidden-block');
const personalRow = $('.personal-row');
const topMenuList = $('.top-menu__list');
const catalogPanel = $('.catalog-panel');
const catalogColumn = $('.catalog__column');
const topMenuLi = $('.top-menu__li');

//ФИКСИРОВАННОЕ МЕНЮ ПРИ СКРОЛЛЕ
$(window).scroll(function () { 
        //КОГДА ПРОКРУЧИВАЕМ НИЖЕ БЛОКА С КЛАССОМ .anim-item
        if($(window).scrollTop() >  animItem.offset().top){
            topRow.addClass('menu-fixed');
            hiddenBlock.addClass('active');
            //ПЕРЕКИДЫВАЕМ КОРЗИНУ И ПРОЧЕЕ В ФИКС МЕНЮ
            if (!personalRow.hasClass('done')){
                personalRow.addClass('done').appendTo(topMenuList.eq(1));
            }
            //ПЕРЕКИДЫВАЕМ КАТАЛОГ В ФИКС МЕНЮ
            if($(window).width()>850){ 
                if (!catalogPanel.hasClass('done')){
                    catalogPanel.addClass('done').insertAfter(topMenuLi.eq(0));
                }
            }    
        } else {
            topRow.removeClass('menu-fixed')
            hiddenBlock.removeClass('active');
            //ВОЗВРАЩАЕМ КОРЗИНУ ОБРАТНО
            if (personalRow.hasClass('done')){
                personalRow.removeClass('done').appendTo($('.catalog__column').eq(2));
            }
            //ВОЗВРАЩАЕМ КАТАЛОГ ОБРАТНО
            if (catalogPanel.hasClass('done')){
                catalogPanel.removeClass('done').appendTo(catalogColumn.eq(0));
            }
        }
});