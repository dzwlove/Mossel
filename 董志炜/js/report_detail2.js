
		document.onscroll = function(){
//			console.log(document.documentElement.scrollTop||document.body.scrollTop);
			var num = document.documentElement.scrollTop||document.body.scrollTop;
			var leftnum = $(".reportdetail_item").offset().left+760+"px";
			$(".reportdetail_enjoy").css("left",leftnum);
			$(".reportdetail_enjoy").css("top",0);
			console.log(num);
			if(num<184){
				$(".reportdetail_enjoy").css("display","none");
				$(".reportdetail_enjoy1").css("display","block");
//				$(".topic_enjoywrap").removeClass("topic_enjoywrap1");
			}else if(num>=184&&num<2500){
				$(".reportdetail_enjoy").css("display","block");
				$(".reportdetail_enjoy1").css("display","none");
//				$(".topic_enjoywrap").addClass("topic_enjoywrap1");
//				
			}else{
				$(".reportdetail_enjoy").css("display","none");
				$(".reportdetail_enjoy1").css("display","none");
			}
		}
		window.onresize = function(){
//			console.log(document.documentElement.scrollTop||document.body.scrollTop);
			var num = document.documentElement.scrollTop||document.body.scrollTop;
			var leftnum = $(".reportdetail_item").offset().left+760+"px";
			console.log(leftnum);
			$(".reportdetail_enjoy").css("left",leftnum);
			$(".reportdetail_enjoy1").css("top",0);
			if(num<184){
				$(".reportdetail_enjoy").css("display","none");
				$(".reportdetail_enjoy1").css("display","block");
//				$(".topic_enjoywrap").removeClass("topic_enjoywrap1");
			}else if(num>=184&&num<2500){
				$(".reportdetail_enjoy").css("display","block");
				$(".reportdetail_enjoy1").css("display","none");
//				$(".topic_enjoywrap").addClass("topic_enjoywrap1");
//				
			}else{
				$(".reportdetail_enjoy").css("display","none");
				$(".reportdetail_enjoy1").css("display","none");
			}
		}
