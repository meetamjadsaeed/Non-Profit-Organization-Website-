//Change color of nav bar on scroll


$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".navbar").css("background" , "#6b6d70");
      $(".navbar").css("margin-right" , "0");
      $(".navbar").css("margin-left" , "0");
       $(".navbar").css("margin-top" , "0");

    }

    else{
      $(".navbar").css("background" , "#ffffff00");
       $(".navbar").css("margin-right" , "14%");
      $(".navbar").css("margin-left" , "14%");
       $(".navbar").css("margin-top" , "2%");   
    }
  })
})







//Sliders

            $('.slider4').owlCarousel({       //slider 04 setting
                items : 4,
                smartSpeed: 650, 
                loop:true,
            margin:10,
            nav:true,
            autoplay:true,
            autoplayTimeout:2000,     
          responsive : {
              // breakpoint from 0 up
              0 : {
                  items:4
              }
          }  
            });


//Gallary
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("GallarymySlides");
  var dots = document.getElementsByClassName("Gallarydemo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" Gallaryactive", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " Gallaryactive";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



//Video Overlay

 ( function( d ) {
   'use strict';

   var str = d.getElementById( 'starter' ), 
       pyr = d.getElementById( 'player' );

   str.classList.remove( 'hide' );

   str.addEventListener( 'click', 
      function() { 
                  pyr.play();
                  str.classList.add( 'hide' );
                 }, false );

   pyr.addEventListener( 'ended', 
      function() { 
                  pyr.load();
                  str.classList.remove( 'hide' );
                 }, false );

 }( document ));



 //For responsiveness

/*
 if ($(window).width() <= 991.98) {
   $('.resolution').html("Current Window Size " + $(window).width());
     $('.slider4').owlCarousel({       //slider 04 setting
                items : 2,
                smartSpeed: 650, 
                loop:true,
            margin:10,
            nav:true,
            autoplay:true,
            autoplayTimeout:2000,     
          responsive : {
              // breakpoint from 0 up
              0 : {
                  items:2
              }
          }  
            });
   
 }

 else

 {

     $('.slider4').owlCarousel({       //slider 04 setting
                items : 6,
                smartSpeed: 650, 
                loop:true,
            margin:10,
            nav:true,
            autoplay:true,
            autoplayTimeout:2000,     
          responsive : {
              // breakpoint from 0 up
              0 : {
                  items:6
              }
          }  
            });




 }



 
 
 
 $(window).resize(function() {
    if ($(window).width() <= 991.98) {
     $('.resolution').html("Current Window Size " + $(window).width());
       $('.slider4').owlCarousel({       //slider 04 setting
                items : 2,
                smartSpeed: 650, 
                loop:true,
            margin:10,
            nav:true,
            autoplay:true,
            autoplayTimeout:2000,     
          responsive : {
              // breakpoint from 0 up
              0 : {
                  items:2
              }
          }  
            });
  }


else

 {

     $('.slider4').owlCarousel({       //slider 04 setting
                items : 6,
                smartSpeed: 650, 
                loop:true,
            margin:10,
            nav:true,
            autoplay:true,
            autoplayTimeout:2000,     
          responsive : {
              // breakpoint from 0 up
              0 : {
                  items:6
              }
          }  
            });




 }



 
 
 });

*/