$('.main__slider').slick({
  	dots: true,
  	arrows: false
  });

$('.left_arrow').click(function(){
  $('.main__slider').slick('slickPrev');
});


$('.right_arrow').click(function(){
  $('.main__slider').slick('slickNext');
});



$('.last__slider, .bestseller__slider').slick({
  	arrows: false
  });

$('.left_arrow-2').click(function(){
  $('.last__slider, .bestseller__slider').slick('slickPrev');
});


$('.right_arrow-2').click(function(){
  $('.last__slider, .bestseller__slider').slick('slickNext');
});


// basket__dropdown

$('.basket_iconed').click(function(){
	$('.basket__dropdown').toggle();
});

$(document).mouseup(function (e) {
    var container = $(".basket__dropdown");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});
