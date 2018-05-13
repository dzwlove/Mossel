	// 函数
	var qietu = function(smallpic, pic, srcname, r_class) {
		for(var i = 0; i < smallpic.length; i++) {
			(function(index, srcname) {
				smallpic[i].onmouseover = function() {
					pic.src = "img/" + srcname + index + ".jpg";  //images/dfanBig1.jpg
					for(var j = 0; j < smallpic.length; j++) {
						smallpic[j].classList.remove(r_class);
					}
					this.classList.add(r_class);
				}
			})(i + 1, srcname);
		}
	}
	var smallpic = document.querySelectorAll(".hw_product_list ul li");
	var bigpic = document.querySelector(".hw_product_big img");
	
	//数量的加减
	var num = 1;
	$(".add").on("click",function(ev){
		num++;
		$("#num").val(num);
		if(num>1){
			$(".alert").css("display","none");
//			ev.preventDefault();
			return false;
		}
	})
	$(".less").on("click",function(ev){
		num--;
		$("#num").val(num);
		if(num < 1){
			num = 1;
			$("#num").val(num);
			$(".alert").css("display","block");
//			ev.preventDefault();
		}
	})
	
	//点击进入登录窗口
	$(".login").on("click",function(){
		$(".hw_login").css("display","block");
	})
	//关闭
	$(".login_close").on("click",function(){
		$(".hw_login").css("display","none");
	})
	
	
	//继续购物
	$("#remind_buy").on("click",function(){
		$(".remind").css("display","none");
	})
	//进入购物车
	$("#remind_add").on("click",function(){
		//进到购物车页面
		$(".remind").css("display","none");
	})
	//关闭提醒
	$("#remind_close").on("click",function(){
		$(".remind").css("display","none");
	})
		
	 // 详情页的滚轮事件
	function addEvent(obj,type,fn){
	    if(obj.attachEvent){ //ie
	        obj.attachEvent('on'+type,function(){
	            fn.call(obj);
	        })
	    }else{
	        obj.addEventListener(type,fn,false);
	    }
	}
	addEvent(window,'scroll',function(){
		var tab = $(".hw_details_tab").offset().top;
		var parameter = $(".hw_parameter").offset().top;
		var Top = document.body.scrollTop || document.documentElement.scrollTop;
		var tabTop = tab - Top;
		var parTop = parameter - Top;
		 if(tabTop < 0){	
		 	$(".hw_details_tab").addClass("hw_tab_fix");
	        $("#hw_nowbtn").css("display","block");
		 }
		 if(parTop > 55){
	            	$(".hw_details_tab").removeClass("hw_tab_fix");
	            $("#hw_nowbtn").css("display","none");
	      }
	});
	  
