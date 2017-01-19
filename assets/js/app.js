


$( document ).ready(function() {
  if ($(window).width() < 800) {
    $("img").removeClass( "half-width-img" ).addClass( "full-width-img" );
    $(".project-blurb").css("width", "80%");
      $(".avalanche").css("width", "100%");
        $(".personal-intro").css("width", "90%");
        $(".personal-intro").css("font-size", "24px");
          $(".personal-intro").css("line-height", "32px");



  }

  if ($(window).width() < 600) {
      $(".avalanche-img-big").css("width", "100%");
        $(".avalanche-img-little").css("width", "100%");
        $(".avalanche-img-big").css("width", "100%");
          $(".avalanche-img-little").css("width", "100%");

  }


});

$( window ).resize(function() {
      if ($(window).width() < 800) {
        $("img").removeClass( "half-width-img" ).addClass( "full-width-img" );
          $(".project-blurb").css("width", "80%");
          $(".avalanche").css("width", "100%");
          $(".personal-intro").css("width", "80%");
          $(".personal-intro").css("font-size", "24px");
            $(".personal-intro").css("line-height", "32px");
      }
      else if ($(window).width() > 800){
        $("img").removeClass( "full-width-img" ).addClass( "half-width-img" );
        $(".project-blurb").css("width", "55%");
        $(".avalanche").css("width", "85%");
        $(".personal-intro").css("width", "65%");
        $(".personal-intro").css("font-size", "30px");
          $(".personal-intro").css("line-height", "40px");
      }

     if ($(window).width() < 600){
       $(".avalanche-img-big").css("width", "100%");
         $(".avalanche-img-little").css("width", "60%");

         $(".personal-intro").css("font-size", "24px");
           $(".personal-intro").css("line-height", "30px");

      }
      else if ($(window).width() > 600){
        $(".avalanche-img-big").css("width", "60%");
          $(".avalanche-img-little").css("width", "28.35%");
        }

});
