(function(){
	var interv;
	$('.geolocation .ico').mouseenter(function(){
			interv = setInterval(function(){
				$('.geolocation span').css('opacity', '0');
				setTimeout(function(){
					$('.geolocation span').css('opacity', '1');
				},600);
			},800);
		});
	$('.geolocation .ico').mouseleave(
		function(){
			window.clearInterval(interv);
			$('.geolocation span').css('opacity', '1');
	});
})();
(function(){
	$('.collapse .ico').mouseenter(function(){
		$('.collapse .ico').css('-webkit-transform','scale(1, 0.5)');
	});
	$('.collapse .ico').mouseleave(function(){
		$('.collapse .ico').css('-webkit-transform','scale(1, 1)');
	});
})()