// change a boarder color
import $ from 'jquery';
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 1200 ){
      $(".timeline ul li:nth-child(2)").addClass("even");
      console.log(scroll);
    }
    if (scroll > 1400 ){
      $(".timeline ul li:nth-child(2)").removeClass("even");
      console.log(scroll);
    }
    if (scroll > 1600 ){
      $(".timeline ul li:nth-child(4)").addClass("even");
      console.log(scroll);
    }
    if (scroll > 1800 ){
      $(".timeline ul li:nth-child(4)").removeClass("even");
      console.log(scroll);
    }
    if (scroll > 2000 ){
      $(".timeline ul li:nth-child(6)").addClass("even");
      console.log(scroll);
    }
    if (scroll > 3000 ){
      $(".timeline ul li:nth-child(6)").removeClass("even");
      console.log(scroll);
    }

});
$(window).scroll(function (){
  var scroll = $(window).scrollTop();
    if (scroll > 1000){
      $(".timeline ul li:nth-child(1)").addClass("odd");
    }
    if (scroll > 1200 ){
      $(".timeline ul li:nth-child(1)").removeClass("odd");
      console.log(scroll);
    }
    if (scroll > 1400 ){
      $(".timeline ul li:nth-child(3)").addClass("odd");
      console.log(scroll);
    }
    if (scroll > 1600 ){
      $(".timeline ul li:nth-child(3)").removeClass("odd");
      console.log(scroll);
    }
    if (scroll > 1800 ){
      $(".timeline ul li:nth-child(5)").addClass("odd");
      console.log(scroll);
    }
    if (scroll > 2000 ){
      $(".timeline ul li:nth-child(5)").removeClass("odd");
      console.log(scroll);
    }
    if (scroll > 3000 ){
      $(".timeline ul li:nth-child(7)").addClass("odd");
      console.log(scroll);
    }
    if (scroll > 3200 ){
      $(".timeline ul li:nth-child(7)").removeClass("odd");
      console.log(scroll);
    }
});

// typing auto complet
// var typed = new Typed('.element', {
//   strings: ["First sentence.", "Second sentence.","First sentence."],
//   typeSpeed: 30
//   });
