$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin: 15,
        loop: true,
        dots: true,
        responsive:{
            400:{
                items: 1
            },
            800:{
                items: 2
            }
        }
    });
  });