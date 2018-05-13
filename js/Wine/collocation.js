//搭配推荐
var check = document.querySelectorAll(".food_checkbox");
var numJ = document.querySelector(".food_list_num");
var num = numJ.innerHTML;
var sumJ = document.querySelector(".zuhejia");
var sum = Number(sumJ.innerHTML);
var dpPriceJ = document.querySelectorAll(".lipin .liPrice");
//var dpPrice = Number(dpPriceJ.innerHTML);
for(var i = 0; i < check.length; i++) {
	check[i].index = i;
	check[i].onclick = function() {
//		console.log(Number(dpPriceJ[this.index].innerHTML));
		if(this.checked == true) {
			num++;
			if(this.index == 0) {
				sum = sum + Number(dpPriceJ[this.index].innerHTML);
			} else if(this.index == 1) {
				sum = sum + Number(dpPriceJ[this.index].innerHTML);
			}
		} else if(this.checked == false) {
			num--;
			if(this.index == 0) {
				sum = sum - Number(dpPriceJ[this.index].innerHTML);
			} else if(this.index == 1) {
				sum = sum - Number(dpPriceJ[this.index].innerHTML);
			}
		}
		numJ.innerHTML = num;
		sumJ.innerHTML = sum;
	}
}
//------------------套餐---------------
$(".food_info_btnred").on("click", function() {
	if(num == 0) {
		$(".shadow").css("display", "block");
	} else {
		//购物车提示2
		$(".remind_collocation").removeClass("hide");
	}
})
$(".sure").on("click", function() {
	$(".shadow").css("display", "none");
})