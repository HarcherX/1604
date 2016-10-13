$(function(){
	var $banner = $('#banner') 
	var $luboimg = $('.lubo img');
	var $lubodd = $('.lubo dd');
	var index = 0;
	var timer = setInterval(foucs,3000);

	$banner.on('mouseenter',function(){
		clearInterval(timer);
	}).on('mouseleave',function(){
		timer = setInterval(foucs,3000);
	})
	//小图绑定事件
	$lubodd.on('mouseenter',function(){
		index = $(this).index();
		gogogo()
	})
	
	function foucs(){
		index++;
		gogogo()
	}
	//显示图片
	function gogogo(){
		if(index>$luboimg.length-1){
			index = 0
		}
		if(index<0){
			index = $luboimg.length-1
		}
		$luboimg.eq(index).animate({opacity:1},1000).siblings().animate({opacity:0},1000);
		$lubodd.eq(index).addClass('action').siblings().removeClass('action');
	
	}
})