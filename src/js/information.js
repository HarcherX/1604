$(function(){
	//放大镜
	var beauty = $('#beauty')
	var $Osmall = beauty.find('.smallimg')
	var $fang = beauty.find('.fang')
	var $xians = beauty.find('.tobig');
	var $Obig = $xians.find('img');
	$xians.hide();
	$fang.hide();
	$Osmall.mousemove(function(evt){
		$xians.show();
		$fang.show();
		var nleft = $Osmall.offset().left;
		var ntop = $Osmall.offset().top;
		var newx = evt.clientX-nleft+$(window).scrollLeft()-50;
		var newy= evt.clientY-ntop+$(window).scrollTop()-50;
		//图片范围移动
		if(newx>$Osmall.width()-$fang.width()){
			newx=$Osmall.width()-$fang.width()
		}
		if(newy>$Osmall.height()-$fang.height()){
			newy=$Osmall.height()-$fang.height()
		}
		if(newx<0){
			newx=0
		}
		if(newy<0){
			newy=0
		}
		$fang.css({left:newx+'px',top:newy+'px'})
		$Obig.css({left:(newx*-2)+'px',top:(newy*-2)+'px'});
	}).mouseleave(function(){
		$xians.hide();
		$fang.hide();
	})
	var Shop = $('#shop')
	var Btn = $('#btn')
	var Tan = $('.tantantan')
	Shop.on('click',function(){
		Tan.show()
	})
	Btn.on('click',function(){
		Tan.hide()
	})
	//顶部导航
	var Examplel = $("#example1")
	var leftShow = $("#example1").find('.leftshow')
	var ooLi = $("#example1").find('li')
	var sshsh = $('#sshsh')
	Examplel.posfixed({
		distance:0,
		pos:"top",
		type:"while",
		hide:false
	}); 
	leftShow.on('click',function(){
		if(sshsh.show()){
			sshsh.hide();
		}else{
			sshsh.show();
		}
	});
	$('.p1').on('click',function(){
		var sl = parseInt($('.qqqq').val())
			sl--;
		if(sl <= 0){
			sl = 1
		}
			$('.qqqq').val(sl);
	});
	$('.p2').on('click',function(){
		var s2 = parseInt($('.qqqq').val())
			s2++;
			$('.qqqq').val(s2);
	});
	ooLi.click(function(){
		$(this).addClass('content').siblings().removeClass('content');
	})
	var Show = $('.show')
	var hide = $('.hide')
	var ddd = $('.ddd')
	var bbb = $('.bbb')
	ddd.on('mouseenter',function(){
		Show.hide()
		hide.show()
	});
	bbb.on('mouseenter',function(){
		hide.hide()
		Show.show()
	})
//点击按钮把物品加入购物车
	$('#shop').on('click',function(){
		var $price = $('.price');
		var $valueN = $('.valueN');
		var $valueB = $('.valueB');
		var $Imgurl = $('.Imgurl');
		var goodName = 'goods';
	//创建一个空对象，来保存商品信息
	var value = {};
	value.imgurl = $Imgurl.attr('src');
	value.name = $valueN.text();
	value.shop = $valueB.text();
	value.price = $price.text();
		
	// 写入商品数量
	var lastCookie = document.cookie;
	if(lastCookie.indexOf(goodName) != -1){
		//遍历cookie,获取原来的数量
		$.each(lastCookie.split(';'),function(idx,val){
			var name = val.split('=')[0];
			if(name == goodName){
				value.qty = JSON.parse(val.split('=')[1]).qty + parseInt($('.qqqq').val());
				return false
			}
		});
	}else{
		value.qty = parseInt($('.qqqq').val());
	}
	
	$('.dodo').html(value.price*value.qty);
	$('.didi').html(value.qty);
	
	var _cookie = goodName + '=' + JSON.stringify(value);
	console.log(_cookie)
	var now = new Date();
	now.setDate(now.getDate() + 1);
	console.log(now);
	document.cookie = _cookie + ';expires=' + now + ';path=/';
	})
	
})