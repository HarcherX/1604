$(function(){
	$("#form").validate({
			rules: {
				txtPass: { required: true ,minlength: 6 },
				txtTwoPass: { required: true ,minlength: 6,equalTo:"#txtPass" },
				Mobile: { required: true, number:true ,minlength: 11 },
			},
			messages:{
				txtPass: {
					required: "*请填写你的密码!",
					minlength: "*密码太短啦，不足6个字符"
				},
				Mobile: {
					required: "*手机格式错误",
					number:"*手机号码只能为数字",
					minlength: "*手机号必须为11为数字"
				},
				txtTwoPass: {
					required: "*请输入确认密码",
					minlength: "*密码太短啦，不足6个字符",
					equalTo: "*确认密码不一致"
            },
			},
			errorPlacement: function (error, element) {
            error.insertAfter(element.parent())
			}
	})
	$('input').focus(function(){
		$(this).closest('label').css('border','1px solid red')
	}).blur(function(){
		$(this).closest('label').css('border','1px solid #c5c8c6')
	})
	//注册验证
	$('.submit_login').click(function(){
		var username = $('#username').val()
		var password = $('#txtPass').val()
		
		var oCheck = $('#chengnuo')
		
		if (oCheck.is(':checked')) {
			
			setCookie("username", username);
			setCookie("password", password);
			alert("注册成功！");
			window.open('file:///D:/h5-1604-xm/src/html/login.html');
		}else{
			alert("请阅读用户注册协议");
		}
		

	
	})
	
	
	
	
	
	
	
})
