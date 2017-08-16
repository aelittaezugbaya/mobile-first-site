$(document).ready(function(){
  let audio = document.getElementById('music');
  $('.onOff').click(function(){
    if($(this).children().hasClass('mute')){
      $('.mute').removeClass('fa-volume-up').addClass('fa-volume-off').addClass('unmute').removeClass('mute')
      music.pause()
    }else if($(this).children().hasClass('unmute')){
      $('.unmute').removeClass('fa-volume-off').addClass('fa-volume-up').addClass('mute').removeClass('unmute')
      music.play()
    }
  });

  $(window).scroll(function() {
    $(".slideanim").each(function(){
      let pos = $(this).offset().top;

      let winTop = $(window).scrollTop();
        if (pos < winTop +700) {
          $(this).addClass("slide");
        }
    });
  });


})

lightbox.option({
     'wrapAround': true,
     'alwaysShowNavOnTouchDevices': true,
     'albumLabel':'%1 / %2'
   })
