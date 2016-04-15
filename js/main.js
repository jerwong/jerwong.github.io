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

$('.enter').click(function(){
   $('.loadingpage').addClass('byebye');
});

$('.bigimage').scroll(function(){
    $("div").removeClass('hide');
    $(".bigimage").addClass('hide');
  });

$('.casestudy').click(function(){
    $('#projectpage div').removeClass('hide');
    $(".bigimage").addClass('hide');
  });


  $(document).ready(function(){

     var current_width = $(window).width();
     //do something with the width value here!
     if(current_width <= 768)
     $('#projectpage div').removeClass('hide');
     });
