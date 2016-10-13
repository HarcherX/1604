$(function(){
	$('input').focus(function(){
		$(this).closest('label').css('border','1px solid red')
	}).blur(function(){
		$(this).closest('label').css('border','1px solid #c5c8c6')
	})
	var username1 = getCookie("username");
	var password1 = getCookie("password");
    //
	//if (username != "" && password != "") {
	//	alert("登录成功！");
	//}
	var username = 
	$('.submit_login').click(function(){
		var username = $('#username').val()
		var password = $('#password').val()
		if(username == username1 && password == password1){
			alert("登录成功！");
			window.open('file:///D:/h5-1604-xm/src/html/index.html');
		}else{
			alert("您所输入的账号密码不正确");
		}
	})
})
