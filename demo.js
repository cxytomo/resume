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