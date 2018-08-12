$(document).ready(function(){
	$(".item-register").click(function(){
		$("#p2").css("display","block");
		$("#p1").css("display","none");
	});
	$(".item-login").click(function(){
		$("#p2").css("display","none");
		$("#p1").css("display","block");
	});
	//发送验证码
	var time=60;
	var timer = null;
	$("#send").click(function(){
		timer = setInterval(function(){
			time--;
		if(time>=0){
			$("#send").html(time +  "秒后重试");
			$("#send").attr("disabled","false");
			
			}else{
			$("#send").html("发送验证码");
			$("#send").attr("disabled","true");
			clearTimeout(timer);
			}		
			},1000)
		});
		
	//旋转
	$(".stage").hover(
		//鼠标进入事件
		function(){
		$("img:nth-child(1)").css("transform","translateZ(200px) rotateY(0deg)");
		$("img:nth-child(2)").css("transform","translateX(200px) rotateY(90deg)");
		$("img:nth-child(3)").css("transform","translateZ(-200px) rotateY(180deg)");
		$("img:nth-child(4)").css("transform","translateX(-200px) rotateY(270deg)");
		$("img:nth-child(5)").css("transform","translateY(200px) rotateX(90deg)");
		$("img:nth-child(6)").css("transform","translateY(-200px) rotateX(-90deg)");
	
		},
		//鼠标离开事件
		function(){
		$("img:nth-child(1)").css("transform","translateZ(100px) rotateY(0deg)");
		$("img:nth-child(2)").css("transform","translateX(100px) rotateY(90deg)");
		$("img:nth-child(3)").css("transform","translateZ(-100px) rotateY(180deg)");
		$("img:nth-child(4)").css("transform","translateX(-100px) rotateY(270deg)");
		$("img:nth-child(5)").css("transform","translateY(100px) rotateX(90deg)");
		$("img:nth-child(6)").css("transform","translateY(-100px) rotateX(-90deg)");;
		});

	//登陆验证
	$("#username").blur(function(){
		const getUserName=$("#username").val();	
		if(getUserName==""){
			$("#user-info").html("用户名不能为空");
			$("#user-info").css("color","red")
		}else{
			$("#user-info").html("username's ok!");
			$("#user-info").css("color","green")
		}
	});
	
		$("#pwd").blur(function(){
		const getPwd=$("#pwd").val();	
		if(getPwd=="" || getPwd.length<=6){
			$("#pwd-info").html("密码不能为空且不能少于6位");
			$("#pwd-info").css("color","red")
		}else{
			$("#pwd-info").html("pwd is ok!");
			$("#pwd-info").css("color","green")
		}
		
			$("#bt-go").click(function(){
/*				if($("#pwd-info").html()=="pwd is ok!"
				&&$("#user-info").html()=="username's ok!"){
					window.location.href="main.html"
				}else{
					window.location.href="login.html"
				}*/
				window.location.href="main.html"
		
	});

	})
})
