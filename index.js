$(document).ready(function(){
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
