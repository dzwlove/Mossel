
//美酒页面 切图函数
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
//侧边栏
$('.icon').hover(
	function() {
		$(this).siblings('.hideCode').css('display', 'block');
	},
	function() {
		$(this).siblings('.hideCode').css('display', 'none');
	}
);
// 回到顶部
function backTop() {
	Math.animation(document.documentElement.scrollTop, 0, 500, "Sine.easeOut", function(value) {
		document.documentElement.scrollTop = value;
	});
}