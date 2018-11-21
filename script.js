function showModal(e){
	e.preventDefault();
	var blockscreen = document.getElementById("blockscreen");
	var win = document.getElementById("window");
	var left = $(window).width()/2-100;
	win.style.left = left +"px";
	var top = $(window).height()/2-100;
	win.style.top = top +"px";
	blockscreen.style.display = 'block';
	win.style.display = 'flex';
	return false;
}


var userFeed = new Instafeed({
get: 'user',
userId: '775356105',
accessToken: '775356105.91e7d69.d6da517d70b24f8ca915a5dc7145564b'
});
userFeed.run();

var updateTimer = function() {
  var cell = document.getElementById('cell');
  var count = Number(cell.innerHTML);

  cell.innerHTML = count += 1;
};

setInterval(updateTimer, 2000);



$(document).ready(function(){
	$("#login-button").on('click' , function(event){
		event.preventDefault();
		var username = $('#username').val();
	    var password = $('#password').val();
	    $.ajax({
	        type: "POST",
	        url: "auth.php",
	        data: {username:username, password:password},
	        dataType: "json",
	        success: function (data) {
	        	if(data) $("#success").show();
			},
			error: function(){
				alert('error');
			}
	    });

	});
	$("#add-button").on('click' , function(){
		var cell = document.getElementById("cell");
		var count = Number(cell.innerHTML);
		cell.innerHTML = count+=1;
	});
	// $('#wrapper').tubular({videoId: 'o3mP3mJDL2k'});
	$("#send-button").click(function(e){
		var name = document.forms["contact-form"]["name"].value;
		var phone = document.forms["contact-form"]["phone"].value;
		var email = document.forms["contact-form"]["email"].value;
		var check = new Boolean(true);
		var firstCharCheck = new Boolean(false);
		if(!(phone.charAt(0)>='0' && phone.charAt(0)<='9' || phone.charAt(0)=='+')) check = Boolean(false);
		for(var i=1 ; i<phone.length ; ++i){
			if(!(phone.charAt(i)>='0' && phone.charAt(i)<='9')) check = Boolean(false);
		}
		if(!check) showModal(e);
		var check1 = new Boolean(false);
		var check2 = new Boolean(false);
		for(var i = 0 ; i<email.length ; ++i) {
			if(email.charAt(i) == '@') {
				check1 = Boolean(true);
			}
			if(email.charAt(i)=='.' && check1) check2 = Boolean(true);
		}
		if(check1 == false || check2 == false) showModal(e);
	})
	$("#exit-button").on('click' , function(){
		console.log("ewfunlk");
		var blockscreen = document.getElementById("blockscreen");
		var win = document.getElementById("window");
		if(blockscreen) blockscreen.style.display = 'none';
		if(win) win.style.display = 'none';
	})
});