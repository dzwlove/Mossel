//4.详情页面的登录提示
$(".loginTips").on("click", function() {
	$(".hw_login").removeClass("hide");
})
$(".login_close").on("click", function() {
	$(".hw_login").addClass("hide");
})

//5.详情页面的购物车提示
$(".wine_cart").on("click", function() {
	$(".remind_fir").removeClass("hide");
})
$(".remind_fir .remind_close").on("click", function() {
	$(".remind_fir").addClass("hide");
})
$(".remind_fir .remind_buy").on("click", function() {
	$(".remind_fir").addClass("hide");
})
$(".remind_collocation .remind_close").on("click", function() {
	$(".remind_collocation").addClass("hide");
})
$(".remind_collocation .remind_buy").on("click", function() {
	$(".remind_collocation").addClass("hide");
})


let spic = document.querySelectorAll(".picSmall li img");
let pic = document.querySelector(".picBig img");
qietu(spic, pic, "wineShenliezhebb", "picsmallRed");

let winePrice = document.querySelector(".prodPrice .price i"); //价格

//商品规格选项
let wineSpec = document.querySelectorAll(".prodSpec span"); //规格选项们
for(let i = 0; i < wineSpec.length; i++) {
	wineSpec[i].onclick = function() {
		let _class = 'specRed';
		for(let j = 0; j < wineSpec.length; j++) {
			wineSpec[j].classList.remove(_class);
		}
		this.classList.add(_class);
		winePrice.innerText = $(this).attr("specPri");
	}
}

//商品数量增减
$(".num_increase").on("click", function() {
	let prodNum = $(".get_num").val();
	prodNum++;
	$(".get_num").val(prodNum);
})
$(".num_decrease").on("click", function() {
	let prodNum = $(".get_num").val();
	if(prodNum > 1) {
		prodNum--;
		$(".get_num").val(prodNum);
	} else {
		$(".popMin").removeClass("hide");
		setTimeout(function() {
			$(".popMin").addClass("hide");
		}, 1500);
	}
})

//详情三项 点击事件
let detailLis = document.querySelectorAll(".detail_nav li");
$(".detail_nav li").on("click", function() {
	let _class = "cur";
	for(let i = 0; i < detailLis.length; i++) {
		detailLis[i].classList.remove(_class);
	}
	$(this).addClass(_class);
	$(this).addClass("bigr");
	let _this = $(this);
	setTimeout(function() { //定时器皮了一下this指向
		_this.removeClass("bigr");
	}, 300);
})
//页面滚动事件 详情三项 待在在顶部
$(window).scroll(function(){
	let ptop = $(".detail_nav").offset().top - $(window).scrollTop();
	if (ptop <= 0){
		$(".detail_nav").addClass("stayTop");
		let otop = $(".detail_show").offset().top - $(window).scrollTop();
		if ($(".detail_show").offset().top - $(window).scrollTop() > 50){
			$(".detail_nav").removeClass("stayTop");
		}
	}
})

$(".wine_cart").on("click",function(){
	$.ajax({
		type: "post",
		url: "test.php",
		data: {
			'id':"01"
		},
//      xhrFields:{
//          withCredentials: true
//      },
		async: true,
		dataType: "json",
		success: function(data) {
			console.log(data);
			//一个卡片
			$(".inf_test .wine_tit").html(data.title);
			$(".inf_test .wine_desc").html(data.describe);
			$(".inf_test .wine_pri").html(data.price);
			$(".inf_test .wine_id").val(data.id);
			//n个卡片
			//...搞个循环?
		}
	});
})

