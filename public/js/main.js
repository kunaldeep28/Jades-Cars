$(".more-btn").click(function(){
	$(".noview").css("display", "block");
	$(".more-btn").css("display","none");
	$(".less-btn").css("display","block");
});
$(".less-btn").click(function(){
	$(".noview").css("display", "none");
	$(".more-btn").css("display","block");
	$(".less-btn").css("display","none");
});