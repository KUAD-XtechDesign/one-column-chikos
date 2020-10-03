$(function(){
  
  $(".img_button").on("click",function(){
    let target = $(this).siblings(".content");
    target.slideToggle("slow");

    $("html, body").animate({scrollTop:target.offset().top}, "slow");
  })

 
  $(".close_button").on("click",function(){
    $(this).parent(".content").slideUp("slow");
  })

  $('#wave').wavify({
    height: 60,
    bones: 3,
    amplitude: 40,
    color: '#0bd',
    speed: .25
  });
});