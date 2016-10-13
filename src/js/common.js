
// 工具类
var Util = {
    _timer: null,
    showTip: function(str) {
        var dom = $('<div class="f-tips"></div>').text(str),
            old = $('.f-tips');
        if (old.length) {
            old.replaceWith(dom); // replaceWith() 方法用指定的 HTML 内容或元素替换被选元素。
        } else {
            $(document.body).append(dom);
        }
        clearTimeout(this._timer);
        this._time = setTimeout(function() {
            dom.css("opacity", "0").remove();
        }, 2000);
    },

    getQuery: function(name, url) {
        var u = url || location.search,
            reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            r = u.substr(u.indexOf("\?") + 1).match(reg);
        return r != null ? r[2] : "";
    }
}

function isMobile(tel) {
    return /^1\d{10}$/.test(tel);
}

function getCookie(name) {
    var reg = new RegExp("(^| )" + name + "(?:=([^;]*))?(;|$)"),
        val = document.cookie.match(reg);
    return val ? (val[2] ? unescape(val[2]) : "") : null;
}

function setCookie(name, value, expires, path, domain, secure) {
    var exp = new Date(),
        expires = arguments[2] || null,
        path = arguments[3] || "/",
        domain = arguments[4] || null,
        secure = arguments[5] || false;
    expires ? exp.setMinutes(exp.getMinutes() + parseInt(expires)) : "";
    document.cookie = name + '=' + escape(value) + (expires ? ';expires=' + exp.toGMTString() : '') + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
}

function delCookie(name, path, domain, secure) {
    var value = $getCookie(name);
    if (value != null) {
        var exp = new Date();
        exp.setMinutes(exp.getMinutes() - 1000);
        path = path || "/";
        document.cookie = name + '=;expires=' + exp.toGMTString() + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
    }
}
$(function(){
	var Select1 = $('#select1')
	var Select2 = $('#select2')
	var gost = $('#gost')
	var gostB = gost.find('.f-pa')
	var oSelect = Select1.find('.select01')
	var oSelect2 = Select2.find('.select02')
	console.log(Select1)
	
	gost.on('mouseenter',function(){
		gostB.show();
	}).on('mouseleave',function(){
		gostB.hide();
	})
	Select1.on('mouseenter',function(){
		oSelect.show();
	}).on('mouseleave',function(){
		oSelect.hide();
	})
	Select2.on('mouseenter',function(){
		oSelect2.show();
	}).on('mouseleave',function(){
		oSelect2.hide();
	})
	var oDopa1 = $('#dopa');
	var oSpan1 = oDopa1.find('span');
	var oDopa2 = $('#dopa1');
	var oSpan2 = oDopa2.find('span');
	
	oDopa1.on('mouseenter',function(){
		oSpan1.show();
	}).on('mouseleave',function(){
		oSpan1.hide();
	})
	oDopa2.on('mouseenter',function(){
		oSpan2.show();
	}).on('mouseleave',function(){
		oSpan2.hide();
	})
	var L_b_l = $('#l_b_l')
	var loser = L_b_l.find('.f-pr')
	loser.on('mouseenter',function(){
		$(this).find('.f-pa').show();
	}).on('mouseleave',function(){
		$(this).find('.f-pa').hide();
	})
	var username1 = getCookie("username");
	if (username1 != null){
		$('.logina').html(username1)
		$('.loginb').html('退出')
	}
	
})