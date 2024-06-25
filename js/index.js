$(document).ready(function(){
   $(".owl-carousel").owlCarousel({
      loop:true,
      nav: true,
      dots: false,
      navText: [
         '<img src="/wiki/img/arrow-prev.svg" alt="previous" class="support__prev-item"></img>',
         '<img src="/wiki/img/arrow-next.svg" alt="next" class="support__next-item">'
      ]
   });
});
$("#toogleNavs").on('click', function(){
   $( this ).toggleClass( "_active" );
   $("#landNavs").toggleClass("_active");
});
$(".jsNavElement").on('click', function(){
   $("#toogleNavs").removeClass("_active");
   $("#landNavs").removeClass("_active");
});