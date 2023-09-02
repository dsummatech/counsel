$(function () {

     window.onscroll = function(){scrollFunction()};
  function scrollFunction() {
      if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
          $("header").css({"background-color":"black"});
          
      }
      
      else{
        $("header").css({"background-color":"transparent"});
      }
  } 
 
 
$(window).ready(function () {
  $("body .body .rel").css({bottom:"-35%"});
  $("header").css({top:"0%"});
})

$(".burger").click(function () {
  $(".mobile-menu").css({left:"30%"});
})
$(".close").click(function () {
  $(".mobile-menu").css({left:"110%"});
})
$(".mobile-menu").click(function () {
  $(".mobile-menu").css({left:"110%"});
})
$("body .welcome-note .note-write .note-read").click(function () {
  $(this).children("body .welcome-note .note-write .note-read p").slideToggle(200);
})

$("footer .answers p").click(function () {
  $(this).children("footer .answers p .span").slideToggle(200);
})

var box = 0;
function boxSlide() {
 
  if (box != 75) {
    box += 25;
    $("body .they-said .said-text .box").css({right:box + "%"});
  }
  else{
    box =0;
    $("body .they-said .said-text .box").css({right:box + "%"});
  }
}
setInterval(boxSlide, 2000);

$("body .they-said .control .l-sli").click(function () {
  if (box > 0) {
    box -= 25;
    $("body .they-said .said-text .box").css({right:box + "%"});
  }
})

$("body .they-said .control .r-sli").click(function () {
  if (box < 75) {
    box += 25;
    $("body .they-said .said-text .box").css({right:box + "%"});
  }
})
  });