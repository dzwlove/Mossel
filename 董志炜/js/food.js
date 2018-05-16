$(".food_info_addcar").on("click",function(){
	$(".remind").css("display","block");
	$("#piece").html($("#foodnum").val());
	var a = $(".food_info_p").html();
	var b = $("#foodnum").val();
	var c = a*b;
	$("#total").html(c);
})

$("#remind_close").on("click",function(){
	$(".remind").css("display","none");
})
$(".re_btn1").on("click",function(){
	$(".remind").css("display","none");
})

$("#remind_close2").on("click",function(){
	$(".Remind").css("display","none");
})
$(".Re_btn1").on("click",function(){
	$(".Remind").css("display","none");
})
//--------------点击收藏--------------------------
$(".food_info_shou").on("click",function(){
	$(".hw_login").css("display","block");
})
//-----------------------点击登录-----------------
$(".login_close").on("click",function(){
	$(".hw_login").css("display","none");
})
$(".food_login").on("click",function(){
	$(".hw_login").css("display","block");
})