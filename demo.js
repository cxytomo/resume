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
})();

//slide icon created by HTML5 canvas
(function(){
	var canv = $('#slide_icon')[0]
	,	cont = canv.getContext('2d');
	//border
	cont.beginPath();
	cont.moveTo(8,10);
	cont.arc(8,18,8,Math.PI*3/2,Math.PI,true);
	cont.lineTo(0,70);
	cont.arc(8,70,8,Math.PI, Math.PI/2,true);
	cont.lineTo(92,78);
	cont.arc(92,70,8,Math.PI/2,0,true);
	cont.lineTo(100,18);
	cont.arc(92,18,8,0,Math.PI*3/2,true);
	cont.lineTo(8,10);
	cont.strokeStyle = "#7f7f7f";
	cont.closePath();
	cont.stroke();
	//content
	cont.beginPath();
	cont.moveTo(24,26);
	cont.arc(24,34,8,Math.PI*3/2,Math.PI,true);
	cont.lineTo(16,54);
	cont.arc(24,54,8,Math.PI, Math.PI/2,true);
	cont.lineTo(76,62);
	cont.arc(76,54,8,Math.PI/2,0,true);
	cont.lineTo(84,34);
	cont.arc(76,34,8,0,Math.PI*3/2,true);
	cont.lineTo(24,26);
	cont.fillStyle = "#7f7f7f";
	cont.closePath();
	cont.fill();
	//next triangle
	cont.beginPath();
	cont.moveTo(55.3,39);
	cont.lineTo(64,44);
	cont.lineTo(55.3,49);
	cont.lineTo(55.3,39);
	cont.fillStyle = "white";
	cont.closePath();
	cont.fill();
	//pre triangle
	cont.beginPath();
	cont.moveTo(44.7,39);
	cont.lineTo(36,44);
	cont.lineTo(44.7,49);
	cont.lineTo(44.7,39);
	cont.fillStyle = "white";
	cont.closePath();
	cont.fill();
})();