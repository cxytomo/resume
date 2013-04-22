var p={position: "locate"};
var bomb = {angle:0,
	toLeft: parseInt($('.bomb_move').css("left")),
	toTop: parseInt($('.bomb_move').css("top"))};
var ptop = 8;
window.onscroll = function() { 
	if(getScrollOffset().y >= 300) {
		$('#scrollToTop').css('opacity','1');
		var position = determ_p();
		$('#quickMove' + ' .' +p.position)[0].className += " cur_p";
		if(position && position !== p.position) {
			$('#quickMove' + ' .' +position)[0].className += " cur_p";
			$('#quickMove' + ' .' +p.position).removeClass('cur_p');
			p.position = position;
		}
	}
	if(getScrollOffset().y < 300) {
		$('#scrollToTop').css('opacity', '0');
		$('.bubble1').css('opacity','0');
		$('.bubble2').css('opacity','0');
		$('.bubble3').css('opacity','0');
	}
	//bombMove();
};

$('#scrollToTop .rocket').click(
	function() {
		setTimeout(function(){
			$('.bubble1').css('opacity','1');
		}, 50);
		setTimeout(function(){
			$('.bubble2').css('opacity','1');
		}, 100);
		setTimeout(function(){
			$('.bubble3').css('opacity','1');
		}, 200);
		toTop(0.2, 60);
	}
);

/*function bombMove() {
	//var scaleTop = 1.12
	//,	scaleAngle = 1.04;
	//console.log(getScrollOffset().y);
	//if(getScrollOffset().y > 105) {
	//	scaleTop = 0.99;
	//	pleft = -1 * Math.abs(pleft);
	//}
	//ptop = ptop * scaleTop;
	//pangle = pangle * scaleAngle;
	//bomb.angle = bomb.angle + pangle;
	//bomb.toLeft = bomb.toLeft + pleft;
	//bomb.toTop = bomb.toTop + ptop;
	//var scaleTop = 1.01
	,	pangle = 2
	,	scaleAngle = 1
	,	pleft;
	pangle = pangle * scaleAngle;
	ptop = ptop*scaleTop;
	bomb.toTop = bomb.toTop + ptop;
	console.log("ptop:"+ptop);
	pleft = 380 * Math.sin((bomb.toTop-50)*0.00628)+460;
	pangle = pangle * scaleAngle;
	bomb.angle = bomb.angle + pangle;
	bomb.toLeft = pleft;
	console.log("scrolltop:"+getScrollOffset().y);
	$('.bomb_move').css({
		"-webkit-transform": "rotate(" + bomb.angle + "deg)",
		"-moz-transform": "rotate(" + bomb.angle + "deg)",
		"-o-transform": "rotate(" + bomb.angle + "deg)",
		"transform": "rotate(" + bomb.angle + "deg)",
		"left": bomb.toLeft + "px",
		"top": bomb.toTop + "px"
	});
}
*/

function toTop(accel, time){
	// a:accelerate
	var a = a || 0.1
	,	time = time || 16
	,	speed = 1 + a
	,	y = getScrollOffset().y
	,	to;
	to = Math.floor(y/speed);
	window.scrollTo(0,to);
	if(y > 0) {
		setTimeout("toTop(" + a + "," + time + ")", time);
	}
}

function getScrollOffset(w) {
	w = w || window;
	if(w.pageXOffset != null) return {x: w.pageXOffset, y: w.pageYOffset};
	var d = w.document;
	//IE and all other morden browsers in standard mode
	if(document.compatMode == CSS1Compat) 
		return {x: d.documentElement.scrollLeft, y: d.documentElement.scrollTop};
	//in quirk mode
	return {x: d.body.scrollLeft, y: d.body.scrollTop};
}

function clear_bg() {
	if($('.cur_p')[0])
	$('.cur_p')[0].style.backgroundColor = "transparent";
	$('.choose .cur_p').removeClass('cur_p');
}

function determ_p(){
	//1.决定位置各个标签的位置，看在那个区间内 2.添加背景色
	var position = {}
	,	box
	,	p;
	box = $('#locate')[0].getBoundingClientRect();//viewport
	position.locate = box.top;
	box = $('#rank')[0].getBoundingClientRect();
	position.rank =  box.top;
	box = $('#explore')[0].getBoundingClientRect();
	position.explore =  box.top;
	box = $('#entertain')[0].getBoundingClientRect();
	position.entertain =  box.top;
	for(e in position) {
		if(position.hasOwnProperty(e)) {
			if(position[e] < 800 && position[e] > -120) {
				p = e;
				break;
			}
		}
	}
	return p;
}

(function(){
	setInterval(function(){
		bubbleup($('.b1'));
	},3000);
	setInterval(function(){
		bubbleup($('.b2'));
	},6000);
	setInterval(function(){
		bubbleup($('.b3'));
	},9000);
	function bubbleup(e){
		var locatn = Math.ceil(Math.random()*960);
		locatn = locatn + 152;
		e.css("left", locatn + "px");
	}
})();

//canvas
(function(){
	var canv = $('.scratch canvas')
	,	context = canv[1].getContext('2d')
	,	eraser;
	function init() {
		var contxt1 = canv[0].getContext('2d');
		contxt1.font = "20px Arial";
		contxt1.fillStyle = "#595741";
		contxt1.fillText("15158107674",10,18);
		context.fillStyle = "#595741";
		context.fillRect(0,0,130,23);
		eraser = new Eraser(); 
		canv[1].addEventListener('mousedown', envCanvas, false);
		canv[1].addEventListener('mousemove', envCanvas, false);
		canv[1].addEventListener('mouseup', envCanvas, false);
	}
	function Eraser(e){
		var tool = this;
		this.started = false;
		this.mousedown = function (e) {
			context.beginPath();
			context.moveTo(e._x, e._y);
			tool.started = true;
	 	 };
		this.mousemove = function (e) {
		    if(tool.started) {
		    	context.lineTo(e._x, e._y);
				/*source-over 默认,相交部分由后绘制图形的填充(颜色,渐变,纹理)覆盖,全部浏览器通过*/
			    context.globalCompositeOperation = "destination-out";
			    context.arc(e._x, e._y, 3, 0, Math.PI * 2);
			    context.strokeStyle = "rgba(250,250,250,0)";//使用颜色值为白色，透明为0的颜色填充
			    context.fill();
			    context.globalCompositeOperation = "source-over";
		    }
		    
	 	};
		this.mouseup = function (e) {
		    if(tool.started) {
				tool.mousemove(e);
				tool.started = false;
		    }
	  	};
	} 
	//give the x,y coordination
	function envCanvas(e) {
		if(e.layerX || e.layerX == 0) { // Firefox
			e._x = e.layerX;
			e._y = e.layerY;
			} else if(e.offsetX || e.offsetX == 0) { // Opera
			e._x = e.offsetX;
			e._y = e.offsetY;
			}
		var func = eraser[e.type];
		if (func){
			func(e);
		}
	}
	init();
})();