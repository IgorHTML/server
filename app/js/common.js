$(function() {

  // Carousel
 $('.carousel').owlCarousel({
    loop: true,
    dots: true,
    items: 1,
    smartSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      850: {
        items: 1
      },
      1150: {
        items: 1
      },
    },
  });
  

 var radiosCountry = $("#radiosCountry").radiosToSlider();
  var radiosConfRussia = $("#radiosConfRussia").radiosToSlider();
  var radiosConfFrance = $("#radiosConfFrance").radiosToSlider();

  $('#radiosCountry').click(function() {
    if ($('.radioCountryRussia').is('.slider-label-active')){
      $('.radio-conf__russia').addClass('active');
      $('.radio-conf__france').removeClass('active');
    } else if($('.radioCountryFrance').is('.slider-label-active')) {
      $('.radio-conf__france').addClass('active');
      $('.radio-conf__russia').removeClass('active');
    } else {
      $('.radio-conf__russia').addClass('active');
      $('.radio-conf__france').removeClass('active');
    }
  })

  $('.radioCountryRussia').click(function() {
    $('.radio-conf__russia').addClass('active');
    $('.radio-conf__france').removeClass('active');
  })
  $('.radioCountryFrance').click(function() {
    $('.radio-conf__france').addClass('active');
    $('.radio-conf__russia').removeClass('active');
  })



  // maskedinput
  $('[name=tel]').inputmask({
    mask: '+7 (999) 999-99-99',
    showMaskOnHover: true,
    showMaskOnFocus: true,
  });
  

  (function($) {
$(function() {

  $('.checkbox').styler();

});
})(jQuery);

 

 
  // img not drag
  $("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

$(window).on('load', function() {

  window.onresize = function() {
    onResize();
  };

  function onResize() {
    $('.questions-inner a').equalHeights();
  }onResize();


});
