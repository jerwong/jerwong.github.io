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
  if ($('.loadingpage').hasClass('.byebye')) {
    $('#wrap').removeClass('hideme');
  }

  if ($('.loadingpage').not('.byebye')) {
    $('#wrap').addClass('hideme');
  }
});

$('.enter').click(function(){
   $('.loadingpage').addClass('byebye');
   $('#wrap').removeClass('hideme');
});


$('.bigimage').scroll(function(){
    $("div").removeClass('hide');
    $(".bigimage").addClass('hide');
  });

$('html').click(function(){
    $('#projectpage div').removeClass('hide');
    $(".bigimage").addClass('hide');
  });


  $(document).ready(function(){

     var current_width = $(window).width();
     //do something with the width value here!
     if(current_width <= 875)
     $('#projectpage div').removeClass('hide');
     if(current_width <= 875)
     $('#workpage #carousel').addClass('noshow');
     if(current_width <= 875)
     $('.mobileworkitems').removeClass('noshow');
     });
