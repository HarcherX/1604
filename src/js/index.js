$(function(){
			var $banner = $('#banner') 
			var $banner_top = $('.banner_left img');
			var $banner_bottom = $('.banner_left dd');
			var index = 0;
			var timer = setInterval(foucs,3000);
			var $next = $banner.find('.brbr')
			var $prev = $banner.find('.blbl')

			$banner.on('mouseenter',function(){
				clearInterval(timer);
				$next.css('display','block')
				$prev.css('display','block')
			}).on('mouseleave',function(){
				timer = setInterval(foucs,3000);
				$next.css('display','none')
				$prev.css('display','none')
			})
			//点击左右实现图片翻转
			$next.on('click',function(){
				index++
				gogogo()
			})
			$prev.on('click',function(){
				index--
				gogogo()
			})
			//小图绑定事件
			$banner_bottom.on('mouseenter',function(){
				index = $(this).index();
				gogogo()
			})
			
			function foucs(){
				index++;
				gogogo()
			}
			//显示图片
			function gogogo(){
				if(index>$banner_top.length-1){
					index = 0
				}
				if(index<0){
					index = $banner_top.length-1
				}
				$banner_top.eq(index).animate({opacity:1},1000).siblings().animate({opacity:0},1000);
				$banner_bottom.eq(index).addClass('alone').siblings().removeClass('alone');
				
			}
			var $b_left = $('#b_left') 
			var $Oimg = $b_left.find('img')
			var $Odd = $b_left.find('dd')
			var i = 0;
			var timer = setInterval(gochange,3000);
			var Next = $b_left.find('.next')
			var Prev = $b_left.find('.prev')
			$b_left.on('mouseenter',function(){
				clearInterval(timer);
				Next.css('display','block')
				Prev.css('display','block')
			}).on('mouseleave',function(){
				timer = setInterval(gochange,3000);
				Next.css('display','none')
				Prev.css('display','none')
			})
			//点击左右实现图片翻转
			Next.on('click',function(){
				i++
				showlist()
			})
			Prev.on('click',function(){
				i--
				showlist()
			})
			//小图绑定事件
			$Odd.on('mouseenter',function(){
				i = $(this).index();
				gogogo()
			})
			
			function gochange(){
				i++;
				showlist()
			}
			//显示图片
			function showlist(){
				if(i>$Oimg.length-1){
					i = 0
				}
				if(i<0){
					i = $Oimg.length-1
				}
				$Oimg.eq(i).animate({left:0}).siblings().animate({left:-590});
				$Odd.eq(i).addClass('alone').siblings().removeClass('alone');
				
			}
			var $leader = $('#leader');
			var oLi = $leader.find('.lii');
			var oUi = $('.list');
			var oDiv = $('.index_nav_box').find('.right')
			var oDivshow = $('.index_nav_box').find('div')
			oLi.on('mouseenter',function(){
				index = $(this).index();
				oUi.eq(index-1).show();
			}).on('mouseleave',function(){
				oUi.eq(index-1).hide();
			})
			oDiv.on('mouseenter',function(){
				oDivshow.show();
			}).on('mouseleave',function(){
				oDivshow.hide();
			})
			
			//实现点击显示
			var oFox = $('#fox')
			var oFli = oFox.find('li')
			var box_show = $('.box2_show')
			var box_hide = $('.box2_hide')
			
			oFli.on('click',function(){
				index = $(this).index();
				$(this).addClass('alone').siblings().removeClass('alone');
				console.log(box_show)
				if(index == 1){
					box_hide.show();
					box_show.hide();
				}else{
					box_hide.hide();
					box_show.show();
				}
			})
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
})
