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
	var $soso = $('#soso') 
	var $loimg = $soso.find('img');
	var $lodd = $soso.find('dd');
	var a = 0;
	var timer = setInterval(zouni,3000);

	//小图绑定事件
	$lodd.on('mouseenter',function(){
		a = $(this).index();
		bibi()
	})
	
	function zouni(){
		a++;
		bibi()
	}
	//显示图片
	function bibi(){
		if(a>$loimg.length-1){
			a = 0
		}
		if(a<0){
			a = $loimg.length-1
		}
		$loimg.eq(a).animate({opacity:1},1000).siblings().animate({opacity:0},1000);
		$lodd.eq(a).addClass('action').siblings().removeClass('action');
	
	}
	var $zoso = $('#zoso') 
	var $loimg2 = $zoso.find('img');
	var $lodd2 = $zoso.find('dd');
	var b = 0;
	var timer = setInterval(zuni,3000);
	//小图绑定事件
	$lodd.on('mouseenter',function(){
		b = $(this).index();
		bib()
	})
	
	function zuni(){
		b++;
		bib()
	}
	//显示图片
	function bib(){
		if(b>$loimg2.length-1){
			b = 0
		}
		if(b<0){
			b = $loimg2.length-1
		}
		$loimg2.eq(b).animate({opacity:1},1000).siblings().animate({opacity:0},1000);
		$lodd2.eq(b).addClass('action').siblings().removeClass('action');
	
	}
	var $xoso = $('#xoso') 
	var $loimg3 = $xoso.find('img');
	var $lodd3 = $xoso.find('dd');
	var c = 0;
	var timer = setInterval(zoni,3000);

	//小图绑定事件
	$lodd3.on('mouseenter',function(){
		c = $(this).index();
		bbi()
	})
	
	function zoni(){
		c++;
		bbi()
	}
	//显示图片
	function bbi(){
		if(c>$loimg3.length-1){
			c = 0
		}
		if(c<0){
			c = $loimg3.length-1
		}
		$loimg3.eq(c).animate({opacity:1},1000).siblings().animate({opacity:0},1000);
		$lodd3.eq(c).addClass('action').siblings().removeClass('action');
	
	}
	var $aoso = $('#aoso') 
	var $loimg4 = $aoso.find('img');
	var $lodd4 = $aoso.find('dd');
	var d = 0;
	var timer = setInterval(zoui,3000);

	//小图绑定事件
	$lodd4.on('mouseenter',function(){
		d = $(this).index();
		ibi()
	})
	
	function zoui(){
		d++;
		ibi()
	}
	//显示图片
	function ibi(){
		if(d>$loimg4.length-1){
			d = 0
		}
		if(d<0){
			d = $loimg4.length-1
		}
		$loimg4.eq(d).animate({opacity:1},1000).siblings().animate({opacity:0},1000);
		$lodd4.eq(d).addClass('action').siblings().removeClass('action');
	
	}
	var $woso = $('#woso') 
	var $loimg5 = $woso.find('img');
	var $lodd5 = $woso.find('dd');
	var e = 0;
	var timer = setInterval(zoun,3000);

	//小图绑定事件
	$lodd5.on('mouseenter',function(){
		e = $(this).index();
		bii()
	})
	
	function zoun(){
		e++;
		bii()
	}
	//显示图片
	function bii(){
		if(e>$loimg5.length-1){
			e = 0
		}
		if(e<0){
			e = $loimg5.length-1
		}
		$loimg5.eq(e).animate({opacity:1},1000).siblings().animate({opacity:0},1000);
		$lodd5.eq(e).addClass('action').siblings().removeClass('action');
	
	}
})