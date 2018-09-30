import $ from 'jquery';
$(document).ready( function(){
  $(window).scroll( function(){
    $("#develop").each(function(){
         $(this).animate({'opacity':'1'},4000);
    });
    $("#ict").each(function(){
         $(this).animate({'opacity':'1'},3500);
    });
    $("#ziek").each(function(){
         $(this).animate({'opacity':'1'},3000);
    });
    $("#beheerder").each(function(){
         $(this).animate({'opacity':'1'},2500);
    });
    $("#monteur").each(function(){
         $(this).animate({'opacity':'1'},2000);
    });
    $("#opleid").each(function(){
         $(this).animate({'opacity':'1'},1500);
    });
    $("#vaar").each(function(){
         $(this).animate({'opacity':'1'},1000);
    });
  });
});
