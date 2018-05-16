//切图函数
//------------------------------------大小图----------------
		var smallpic = document.querySelectorAll(".food_info_list li");
		var pic = document.querySelector(".food_info_img img");
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
		qietu(smallpic, pic, "food_info_big", "food_info_active");

		//--------------------------------加减号--------------------
		$(".food_info_num1").on("click", function() {
			var num = $("#foodnum").val();
			num++;
			$("#foodnum").val(num);

		})
		$(".food_info_num2").on("click", function() {
			var num = $("#foodnum").val();
			num--;
			$("#foodnum").val(num);
			if(num < 1) {
				num = 1
				$("#foodnum").val(num);
				$(".num_show").css("display", "block");
				setTimeout(function() {
					$(".num_show").css("display", "none");
				}, 1000)

			}
		})