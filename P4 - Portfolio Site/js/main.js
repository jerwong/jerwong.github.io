$('#nav-icon3,#nav-icon3grey').click(
  function(){
    $('.navmenu').toggleClass('hide')
  }
)


$(document).ready(function(){
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4,#nav-icon3grey').click(function(){
        $(this).toggleClass('open');
    });
});


$(document).ready(function(){
    $('.loadingpage').addClass('byebye');
  }
)

/*
$(document).ready('pageinit', function() {
    $('.loadingpage').addClass('byebye');
});
*/


$('.bigimage').scroll(function(){
    $("div").removeClass('hide');
    $(".bigimage").addClass('hide');
  }
)

$('html').click(function(){
    $('#projectpage div').removeClass('hide');
    $(".bigimage").addClass('hide');
  }
)
