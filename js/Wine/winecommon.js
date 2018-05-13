//1.加载头尾侧边栏
$("#header").load("../header.html");
$("#footer").load("../footer.html");
$("#sidebar").load("../sidebar.html");

//2.侧边栏悬浮事件
$('.icon').hover(
	function() {
		$(this).siblings('.hideCode').css('display', 'block');
	},
	function() {
		$(this).siblings('.hideCode').css('display', 'none');
	}
);

//3.回到顶部
function backTop() {
	Math.animation(document.documentElement.scrollTop, 0, 500, "Sine.easeOut", function(value) {
		document.documentElement.scrollTop = value;
	});
}
//6.切图函数
var qietu = function(smallpic, pic, srcname, r_class) {
	for(var i = 0; i < smallpic.length; i++) {
		(function(index, srcname) {
			smallpic[i].onmouseover = function() {
				pic.src = "img/" + srcname + index + ".jpg";
				for(var j = 0; j < smallpic.length; j++) {
					smallpic[j].classList.remove(r_class);
				}
				this.classList.add(r_class);
			}
		})(i + 1, srcname);
	}
}