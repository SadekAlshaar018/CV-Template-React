// change a boarder color
import $ from 'jquery';
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 1100 ){
      $(".timeline ul li:nth-child(even)").addClass("even");
      console.log(scroll);
    }
    if (scroll > 1200 ){
      $(".timeline ul li:nth-child(even)").removeClass("even");
      console.log(scroll);
    }

});
$(window).scroll(function (){
  var scroll = $(window).scrollTop();
    if (scroll > 1000){
      $(".timeline ul li:nth-child(odd)").addClass("odd");
    }
    if (scroll > 1100 ){
      $(".timeline ul li:nth-child(odd)").removeClass("odd");
      console.log(scroll);
    }
});

// typing auto complet
// var typed = new Typed('.element', {
//   strings: ["First sentence.", "Second sentence.","First sentence."],
//   typeSpeed: 30
//   });
