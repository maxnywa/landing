$( function() {
  //Init tabs
  $( "#tabs" ).tabs();
  $( "#tabs-portfolio" ).tabs();
} );

// init slick carousel  
$('.reviews-slider').slick({ 
dots: true,
prevArrow: '<div class="slick-prev slick-arrow"><div class="slider-button"><i class="fa fa-chevron-left"></i></div></div>',
nextArrow: '<div class="slick-next slick-arrow"><div class="slider-button"><i class="fa fa-chevron-right"></i></div></div>',
});

//Init slick nav
$('.header-nav').slicknav({
  appendTo:'.header .container-fluid',
  label:'',
});	