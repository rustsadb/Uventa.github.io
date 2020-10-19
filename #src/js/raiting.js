var craiting = function(nowPos) {
    // У всех убираем active
    $('.raiting .raiting__star').removeClass('active').children('i').addClass('fa-star-o').removeClass('fa-star');
    for (var i = 0; nowPos + 1 > i; i++) {
      $('.raiting .raiting__star').eq(i).toggleClass('active').children('i').removeClass('fa-star-o').addClass('fa-star');
    }
  }
  
  //переменная содержит количество активных звезд
  let raitingCount = $('.raiting__star.active').length;
  //Количество голосов
  let votesCount = 123;
  //Отображение количества голосов
  $('.raiting .raiting__num').html('(' + votesCount + ')');
  
  // При наведении
  $('.raiting .raiting__star').hover(function() {
    craiting($(this).index());
  });
  
  // При клике
  $('.raiting .raiting__star').click(function() {
    craiting($(this).index());
    //меняем количество по клику
    raitingCount = $('.raiting__star.active').length;
    votesCount++;
    $('.raiting .raiting__num').html('(' + votesCount + ')');
    $('.raiting').addClass('nohover')
    console.log(raitingCount)
    //Отправка запроса
    jQuery.post('rating.php', raitingCount, console.log('Данные отправлены'));
  });
  
  $('.raiting .raiting__star').on('mouseleave', function() {
    craiting(+raitingCount - 1);
  });