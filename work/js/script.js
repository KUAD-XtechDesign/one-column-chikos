$(function(){
  
  $(".img_button").on("click",function(){
    let target = $(this).siblings(".content");
    target.slideToggle("slow");

    $("html, body").animate({scrollTop:target.offset().top}, "slow");
  })

 
  $(".close_button").on("click",function(){
    $(this).parent(".content").slideUp("slow");
  })

  
});