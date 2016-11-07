'use strict';
function fade(fade){
	var dom = $(fade);
	var li = dom.children('ul').find('li');
	var control =  dom.children('.control-btn');
	var controlLeft = dom.children('.left-btn');
	var controlRight = dom.children('.right-btn');
	var index  = 0;
	var length = dom.children('ul').find('li').length;
	var string = ''
	var active = 0;
	var timerid =''; 
	var time = 3000;
	li.first().animate({opacity: 1, zIndex: 1}, 'ease');
	for (var i = 0; i < length; i++) {
		if (i==active) {
			string += '<span class="active"></span>';
		}else{
			string += '<span></span>';
		}
	}
	control.append(string);
	control.find('span').hover(function() {
		clearInterval(timerid);
	}, function() {
		timerid = setInterval(autoFade,time)
	});
	control.find('span').on('click', function() {
		li.eq($(this).index()).animate({opacity: 1, zIndex: 1}, 'ease').siblings().animate({opacity: 0, zIndex: 0}, 'ease');
		$(this).addClass('active').siblings().removeClass('active');
		index = $(this).index();
	});
	timerid = setInterval(autoFade,time)
	function autoFade(){
		index===length-1?index = 0 : index ++ ;
		li.eq(index).animate({opacity: 1, zIndex: 1}, 'ease').siblings().animate({opacity: 0, zIndex: 0}, 'ease');
		control.find('span').eq(index).addClass('active').siblings().removeClass('active');
	}
	function left (){
		index > 0? index -- :index = length-1 ;
		li.eq(index).animate({opacity: 1, zIndex: 1}, 'ease').siblings().animate({opacity: 0, zIndex: 0}, 'ease');
		control.find('span').eq(index).addClass('active').siblings().removeClass('active');
	}
	function right (){
		autoFade()
	}
	controlLeft.click(function() {
		left()
	})
	controlRight.click(function() {
		right()
	});
	controlLeft.hover(function() {
		clearInterval(timerid);
	}, function() {
		timerid = setInterval(autoFade,time)
	});
	controlRight.hover(function() {
		clearInterval(timerid);
	}, function() {
		timerid = setInterval(autoFade,time)
	});
}
