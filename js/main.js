$('.mainNav a').click(
  function(){
    $('.content').addClass('invis')
    $( $(this).attr('href') ).removeClass('invis')
  }
)

$('.Home').click(
  function(){
    $(this).addClass('hide')
  }
)
