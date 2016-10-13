$(function(){
	render()
	$('.div2').on('click','.sb6',function(){
			var $li = $(this).closest('li');
			var goods = $li.attr('data-goodsname');
			//把时间设置成昨天
			var now = new Date();
			now.setDate(now.getDate()-1);
			//删除cookie
			document.cookie = goods + '=null;expires=' + now + ';path=/';
			//移除html
			$li.remove();
			location.reload();
			$('.box').show();
			$('.div2').hide()
		})
		/*
		<div class="div2">
				<input type="checkbox"/>
				<span class="sb1"><img src="../img/lololo.jpg"></span>
				<span class="sb2">YOGA伊加 全棉印花 亲肤 夏凉被空调被 200*230CM</span>
				<span class="sb3">79.00</span>
				<span class="sb4">
					<button class="button1">-</button>
					<input class="text" placeholder="1" type="text"/>
					<button class="button2">+</button>
				</span>
				<span class="sb5">79</span>
				<span class="sb6">x删除</span>
			</div>
		*/
		function render(){
			var _cookie = document.cookie.split(';');
			//遍历cookie
			var $ul = $('<ul/>');
			var subPrice = 0;
			var many = 0;
			if(_cookie !=''){
				$('.box').hide()
				$('.div2').show();
				$.each(_cookie,function(idx,val){
					var info = JSON.parse(val.split('=')[1]);
					var $li = $('<li/>').attr('data-goodsname',val.split('=')[0]);
					var $input1 = $('<input/>').addClass('checked').attr({'type':'checkbox','checked':'checked'});
					var $input2 = $('<input/>').addClass('text').attr('type','text').val(info.qty);
					var $span1 = $('<span/>').addClass('sb1');
					var $span2 = $('<span/>').addClass('sb2').text(info.name);
					var $span3 = $('<span/>').addClass('sb3').html('&yen;' + info.price);
					var $span4 = $('<span/>').addClass('sb4');
					var $span5 = $('<span/>').addClass('sb4').html('&yen;' + info.price);
					var $img = $('<img/>').attr('src',info.imgurl);
					var $btnClose = $('<span/>').addClass('sb6').html('&times;删除')
					var $button1 =$('<button/>').addClass('button1').html('-');
					var $button2 =$('<button/>').addClass('button2').html('+');
					$span1.append($img);
					$span4.append([$button1,$input2,$button2]);
					$li.append([$input1,$span1,$span2,$span3,$span4,$span5,$btnClose]).appendTo($ul);
					//计算总价
					subPrice += info.price * info.qty;
					//$price1.html('&yen;' + subPrice);
					many = info.qty
					$('#totalValue').html(subPrice);
					$('#totalValue1').html(subPrice);
					$('#dianpu').html(info.shop);
				});
			}
			$('.div2').empty();
			$ul.appendTo('.div2');
		}
})