$(document).ready(function(){
	$(".contact-form__submit").on('click' , function(){
		var blockscreen = document.getElementById("blockscreen");
		var win = document.getElementById("window");
		var left = $(window).width()/2-100;
		win.style.left = left +"px";
		var top = $(window).height()/2-100;
		win.style.top = top +"px";
		blockscreen.style.display = 'block';
		win.style.display = 'flex';
	});
});