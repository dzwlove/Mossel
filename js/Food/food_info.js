//------------------------------------------------搭配套餐--------------------
//var check = document.querySelectorAll(".food_checkbox");
//var numJ = document.querySelector(".food_list_num");
//var num = numJ.innerHTML;
//var sumJ = document.querySelector(".zuhejia");
//var sum = Number(sumJ.innerHTML);
//for(var i=0;i<check.length;i++){
//	check[i].index = i;
//	check[i].onclick = function(){
//		console.log(this.index);
//		if(this.checked == true){
//			num++;
//			if(this.index == 0) {
//				sum = sum + 58;
//			} else if(this.index == 1){
//				sum = sum + 9.9;
//			}
//		} else if(this.checked == false){
//			num--;
//			if(this.index == 0) {
//				sum = sum - 58;
//			} else if(this.index == 1){
//				sum = sum - 9.9;
//			}
//		}
//		numJ.innerHTML = num;
//		sumJ.innerHTML = sum;
//	}
//}

//------------------套餐---------------
//$(".food_info_btnred").on("click",function(){
//	console.log(num);
//	if(num == 0){
//		$(".shadow").css("display","block");
//	} else{
//		$(".Remind").css("display","block");
//	}
//})
//$(".sure").on("click",function(){
//	$(".shadow").css("display","none");
//})

//------------------点击加入购物车---------------
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
