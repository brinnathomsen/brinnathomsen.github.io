


$( document ).ready(function() {
  if ($(window).width() < 800) {
    $("img").removeClass( "half-width-img" ).addClass( "full-width-img" );
    $(".project-blurb").css("width", "80%");
      $(".avalanche").css("width", "100%");
        $(".personal-intro").css("width", "90%");
        $(".personal-intro").css("font-size", "24px");
          $(".personal-intro").css("line-height", "32px");
          $(".left-arrow").addClass("remove-arrows");
          $(".right-arrow").addClass("remove-arrows");



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
          // $(".personal-intro").css("font-size", "24px");
          //   $(".personal-intro").css("line-height", "32px");
            $(".left-arrow").addClass("remove-arrows");
            $(".right-arrow").addClass("remove-arrows");
      }
      else if ($(window).width() > 800){
        $("img").removeClass( "full-width-img" ).addClass( "half-width-img" );
        $(".project-blurb").css("width", "55%");
        $(".avalanche").css("width", "85%");
        $(".personal-intro").css("width", "65%");
        // $(".personal-intro").css("font-size", "30px");
        //   $(".personal-intro").css("line-height", "40px");
          $(".left-arrow").removeClass("remove-arrows");
          $(".right-arrow").removeClass("remove-arrows");
      }

     if ($(window).width() < 600){
       $(".avalanche-img-big").css("width", "100%");
         $(".avalanche-img-little").css("width", "46%");

         $(".personal-intro").css("font-size", "24px");
           $(".personal-intro").css("line-height", "30px");


      }
      else if ($(window).width() > 600){
        $(".avalanche-img-big").css("width", "60%");
          $(".avalanche-img-little").css("width", "28.35%");
        }

});





$(document).ready(function(){
    $(window).scroll(function(){

        if ($(window).scrollTop() > 200){
            $('.row2').addClass('animated fadeInUp');
            $('.row2').removeClass('hide');
        }

        if ($(window).scrollTop() > 600){
            $('.row3').addClass('animated fadeInUp');
            $('.row3').removeClass('hide');
        }

        if ($(window).scrollTop() > 1000){
            $('.row4').addClass('animated fadeInUp');
            $('.row4').removeClass('hide');
        }

        if ($(window).scrollTop() > 1400){
            $('.row5').addClass('animated fadeInUp');
            $('.row5').removeClass('hide');
        }

    });
});



// var titles = ["guess what?",  "I'm currently crafting", "I'm looking forward to"];
// var texts = ["my team made it to the top 10 at the money 20/20 hackathon last month!",  "a speculative fiction about big data", "graduating from Parsons School of Design in December!"];
// var count = 0;
// function changeText() {
//     $("#example").text(texts[count]);
//     $('#example').addClass('animated fadeIn');
//     $("#announcement-title").text(titles[count]);
//
//     count < 3 ? count++ : count = 0;
//     $('.status-bar').addClass('animated fadeIn');
// }
// setInterval(changeText, 4000);
