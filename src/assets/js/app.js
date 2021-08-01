console.log('file 1');

$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		prevArrow:$('.left_arrow'),
		infinity:true,
		nextArrow:$('.right_arrow'),
		dots:true,
		appendDots:$('.slider_roll'),
		autoplay:true,
		autoplaySpeed: 5000,

	});
});

$(document).ready(function() {
	const heartView = $('.goods_favourite')

	for (let x = 0; x < heartView.length; x++){
		heartView[x].addEventListener('click', function(e){
			$($('.goods_favourite')[x]).toggleClass('hidden');
			$($('.goods_favourite_thick')[x]).toggleClass('view');
		})
	}
});

$(document).ready(function() {
	const heart = $('.goods_favourite_thick')

	for (let x = 0; x < heart.length; x++){
		heart[x].addEventListener('click', function(e){
			$($('.goods_favourite')[x]).removeClass('hidden');
			$($('.goods_favourite_thick')[x]).removeClass('view');
		})
	}
});