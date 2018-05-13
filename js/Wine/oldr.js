//7.展示页面的过滤器函数
//点击"全部"时，移除其他所有的span类名
//点击除"全部"外的span，该span添加类名，并移除"全部"的类名，再次点击移除类名
//当只有一个span有类名时，再次点击移除当前类名，并且添加"全部"的类名
let filter = function(alls, one, _class) {
	let count = 0;
	alls.onclick = function() {
		count = 0;
		for(let i = 0; i < one.length; i++) {
			one[i].parentNode.classList.remove(_class);
		}
		alls.parentNode.classList.add(_class);
	}
	for(let i = 0; i < one.length; i++) {
		one[i].onclick = function() {
			alls.parentNode.classList.remove(_class);
			if(this.parentNode.className == _class) {
				this.parentNode.classList.remove(_class);
				count--;
			} else {
				this.parentNode.classList.add(_class);
				count++;
			}
			if(count == 0) {
				alls.parentNode.classList.add(_class);
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
var countriesArr = ["全部"]; //数组--存放字段数据
var typesArr = ["全部"];
var othersArr = ["全部"];
$(".filterValue a").on("click", function() {
	if($(this).html() == "全部") { //------点击全部按钮时，更为全部
		if($(this).parent().parent().parent().hasClass("countries")) {
			countriesArr = ["全部"];
		} else if($(this).parent().parent().parent().hasClass("types")) {
			typesArr = ["全部"];
		} else if($(this).parent().parent().parent().hasClass("others")) {
			othersArr = ["全部"];
		}
	} else { //------点击别的时，移除"全部"
		if($(this).parent().parent().parent().hasClass("countries")) {
			//			console.log(countriesArr.indexOf("全部"));
			if(countriesArr.indexOf("全部") >= 0) {
				var ind = countriesArr.indexOf("全部");
				countriesArr.splice(ind, 1);
			}
		} else if($(this).parent().parent().parent().hasClass("types")) {
			if(typesArr.indexOf("全部") >= 0) {
				var ind = typesArr.indexOf("全部");
				typesArr.splice(ind, 1);
			}
		} else if($(this).parent().parent().parent().hasClass("others")) {
			if(othersArr.indexOf("全部") >= 0) {
				var ind = othersArr.indexOf("全部");
				othersArr.splice(ind, 1);
			}
		}
		//------有类名则加入
		if($(this).parent().hasClass("rSelected") == true) {
			if($(this).parent().parent().parent().hasClass("countries")) {
				countriesArr.push($(this).html());
			} else if($(this).parent().parent().parent().hasClass("types")) {
				typesArr.push($(this).html());
			} else if($(this).parent().parent().parent().hasClass("others")) {
				othersArr.push($(this).html());
			}
		} else { //------无类名则删除
			if($(this).parent().parent().parent().hasClass("countries")) {
				var ind = countriesArr.indexOf($(this).html());
				countriesArr.splice(ind, 1);
			} else if($(this).parent().parent().parent().hasClass("types")) {
				var ind = typesArr.indexOf($(this).html());
				typesArr.splice(ind, 1);
			} else if($(this).parent().parent().parent().hasClass("others")) {
				var ind = othersArr.indexOf($(this).html());
				othersArr.splice(ind, 1);
			}
		}
		let num = 0;
		for(let i = 0; i < $(".filterValue a").length; i++) {
			if($(".filterValue a").eq(i).parent().hasClass("rSelected")) {
				num++;
			} else {
				num--;
			}
			if(num == 1) {
				console.log("success");
			}
			console.log(num);
		}
	}

	var countriesObj = new Object();
	countriesObj['countries'] = countriesArr;

	var typesObj = new Object();
	typesObj['types'] = typesArr;

	var othersObj = new Object();
	othersObj['others'] = othersArr;

	let cObj = JSON.stringify(countriesObj);
	let tObj = JSON.stringify(typesObj);
	let oObj = JSON.stringify(othersObj);
	let obj = `{${cObj},${tObj},${oObj}}`;

	$.ajax({
		type: "post",
		url: "test.php",
		data: {
			'map': obj,
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