$('.mainNav a').click(
  function(){
    $('.content-box').addClass('hide')
    $( $(this).attr('href') ).removeClass('hide')
  }
)

$('.btn-close').click(
  function(){
    $(this).closest('.content-box').addClass('hide')
  }
)
