
		var r_h2 = document.querySelector(".report_p1 h2");
		var p1_img = document.querySelector(".report_p1 img");
		r_h2.onmouseover = function(event){
			var ev = event || window.event;
			var offX = ev.offsetX;
			var offY = ev.offsetY;
			var maxX = r_h2.clientWidth-p1_img.clientWidth;
			var maxY = r_h2.clientHeight-p1_img.clientHeight;
			if(offX<=0){
				offX = 0;
			}else if(offX>=maxX){
				offX = maxX;
			}
			if(offY<=0){
				offY = 0;
			}else if(offY>=maxY){
				offY = maxY;
			}
			p1_img.style.top = offY + "px";
			p1_img.style.left = offX + "px";
		}
		

		var r_box = document.getElementsByClassName('r_box')[0];
		var index = 1;
		var timer;
		function right(){
			index++;
			if (index==7) {
				index = 2;
				r_box.style.left = "-1000px";
			}
			moveWithIndex();
		}
		function left(){
			index--;
			if (index==-1) {
				index = 4;
				r_box.style.left = "-5000px";
			}
			moveWithIndex();
		}
		function moveWithIndex(){
			var l = index * (-1000) - r_box.offsetLeft;
			var count = 0;
			clearInterval(timer);
			timer = setInterval(function(){
				r_box.style.left = r_box.offsetLeft + (l / 10) + "px";
				count++;
				if (count>=10) {
					r_box.style.left = index * (-1000) + "px";
					clearInterval(timer);
				}
			}, 20)
		}
		setInterval(right, 2000); 
		$(".lose").click(function(){
			return false;
		})
