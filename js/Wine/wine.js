//------调用切图函数
var pic1 = document.querySelector(".pic1 img");
var smallpic1 = document.querySelectorAll(".picS1");
qietu(smallpic1, pic1, "wineMaotai", "picSelected");
var pic2 = document.querySelector(".pic2 img");
var smallpic2 = document.querySelectorAll(".picS2");
qietu(smallpic2, pic2, "wineShenliezhe", "picSelected");
var pic3 = document.querySelector(".pic3 img");
var smallpic3 = document.querySelectorAll(".picS3");
qietu(smallpic3, pic3, "wineLiaowangzhe", "picSelected");
var pic4 = document.querySelector(".pic4 img");
var smallpic4 = document.querySelectorAll(".picS4");
qietu(smallpic4, pic4, "wineShelazi", "picSelected");
var pic5 = document.querySelector(".pic5 img");
var smallpic5 = document.querySelectorAll(".picS5");
qietu(smallpic5, pic5, "wineMaotai", "picSelected");
var pic6 = document.querySelector(".pic6 img");
var smallpic6 = document.querySelectorAll(".picS6");
qietu(smallpic6, pic6, "wineShenliezhe", "picSelected");
var pic7 = document.querySelector(".pic7 img");
var smallpic7 = document.querySelectorAll(".picS7");
qietu(smallpic7, pic7, "wineLiaowangzhe", "picSelected");
var pic8 = document.querySelector(".pic8 img");
var smallpic8 = document.querySelectorAll(".picS8");
qietu(smallpic8, pic8, "wineShelazi", "picSelected");

//7.展示页面的过滤器函数
//点击"全部"时，添加类名并移除其他所有的span类名
//点击除"全部"外的span，无类名则添加类名，并移除其他span的类名，
//					有类名则移除类名，并添加"全部"的类名
let filter = function(alls, one, _class) {
	alls.onclick = function() {
		for(let i = 0; i < one.length; i++) {
			one[i].parentNode.classList.remove(_class);
		}
		alls.parentNode.classList.add(_class);
	}
	for(let i = 0; i < one.length; i++) {
		one[i].onclick = function() {
			if(this.parentNode.className == _class) {
				alls.parentNode.classList.add(_class);
				this.parentNode.classList.remove(_class);
			} else {
				alls.parentNode.classList.remove(_class);
				for(let j = 0; j < one.length; j++) {
					one[j].parentNode.classList.remove(_class);
				}
				this.parentNode.classList.add(_class);
			}
		}
	}
}
//------调用过滤器函数
let countriesAll = document.querySelector(".countries .filterAll");
let countriesOne = document.querySelectorAll(".countries .filterHandle");
let typesAll = document.querySelector(".types .filterAll");
let typesOne = document.querySelectorAll(".types .filterHandle");
let othersAll = document.querySelector(".others .filterAll");
let othersOne = document.querySelectorAll(".others .filterHandle");
filter(countriesAll, countriesOne, "rSelected");
filter(typesAll, typesOne, "rSelected");
filter(othersAll, othersOne, "rSelected");

//8.ajax发送筛选字段的请求
var countries = "全部";
var types = "全部";
var others = "全部";
$(".filterValue a").on("click", function() {
	if($(this).html() == "全部") { //------点击全部按钮时，更为全部
		if($(this).parent().parent().parent().hasClass("countries")) {
			countries = $(this).html();
		} else if($(this).parent().parent().parent().hasClass("types")) {
			types = $(this).html();
		} else if($(this).parent().parent().parent().hasClass("others")) {
			others = $(this).html();
		}
	} else {					//------点击别的时，更为别的
		//------有类名则更为
		if($(this).parent().hasClass("rSelected") == true) {
			if($(this).parent().parent().parent().hasClass("countries")) {
				countries = $(this).html();
			} else if($(this).parent().parent().parent().hasClass("types")) {
				types = $(this).html();
			} else if($(this).parent().parent().parent().hasClass("others")) {
				others = $(this).html();
			}
		} else {//------无类名则全部
			if($(this).parent().parent().parent().hasClass("countries")) {
				countries = "全部";
			} else if($(this).parent().parent().parent().hasClass("types")) {
				types = "全部";
			} else if($(this).parent().parent().parent().hasClass("others")) {
				var ind = othersArr.indexOf($(this).html());
				others = "全部";
			}
		}
	}
	var obj = new Object();
	obj['countries'] = countries;
	obj['types'] = types;
	obj['others'] = others;
//	{"countries":"葡萄牙","types":"起泡酒","others":"组合优惠"}
	$.ajax({
		type: "post",
		url: "test.php",
		data: {
			'map': JSON.stringify(obj),
			'name': "lhh"
		},
		//	            xhrFields:{
		//	                withCredentials: true
		//	            },
		async: true,
		dataType: "json",
		success: function(data) {
			console.log(data);
		}
	});
})
//-----------------------
//9.页面加载 ajax获取后台数据
$(function(){
	$.ajax({
		type: "post",
		url: "test.php",
		data: {},
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
//10.点击卡片ajax传id->后台->详情信息
//$(".kapian").on("click",function(){
//	var id = $(".kapian .wine_id").eq(i).val();
//	$.ajax({
//		type: "post",
//		url: "test.php",
//		data: {
//			JSON.stringify(id)
//		},
////      xhrFields:{
////          withCredentials: true
////      },
//		async: true,
//		dataType: "json",
//		success: function(data) {
//			console.log(data);
//			//详情页的 ???
//			$(".").html(data.type);
//			
//		}
//	});
//})
