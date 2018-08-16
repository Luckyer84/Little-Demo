$(document).ready(function() {
	//Ajax请求获取姓名
	$.ajax({
			type:"get",
			url:"test.json",
			async:true,
			dataType:"json",
			success:function(data){
				if(data.code==1){
			    alert("用户名异步获取成功！");
				data.list.forEach(function(item){
				if(item.name=="McGrade"){
				$(".showInfo").html(item.name)
					}
				})
			}							
		}
	});

	//上下午时间的显示
	(function(){
		const myDate=new Date();
		const hourTime=myDate.getHours();
		if(hourTime>=6 && hourTime<12){
			$("#timeInfo").html("上午好！")
		}else if(hourTime<18){
			$("#timeInfo").html("下午好！")
		}else{
			$("#timeInfo").html("晚上好！")
		}
	})()
				
	//下划线
    const title=$(".head-bottom ul").children();
    for(let i=0;i<title.length;i++){
	      const underline=$(".d"); 
		  const $title_i = $(title[i]); 
		  const $underline = $(underline[i]);
    $title_i.on({
		"mouseenter":function(){		
					$underline.animate({"width":"2.6em","left":"0em","opacity":1});	
		},
		 "mouseleave":function(){
					$underline.animate({"width":0,"left":"1.3em","opacity":0});
		},
	});
}
    
   	const li=$("#left-aside").children();
    	for(let i=0;i<li.length;i++){
    		const list=$(".window-list"); 
    		const $li_i = $(li[i]); 
	  		const $list_i = $(list[i]);
	  		$li_i.hover(function(){
	  		$list_i.css("display","block");
	  		list.not($list_i).css("display","none");
	 	 },function(){  
	  		$list_i.css("display","none");
	  	})
		 	 $list_i.hover(function(){
		  		$(this).css("display","block");
		  },function(){
				 $(this).css("display","none");
		  })
	   }
   	
    //更改头像
   $(".aside-personInfo div:first-child").hover(function(){
   			$(".change-head").toggle()
   	})
   
   //图片切换
 	  for(let i=0;i<5;i++){
	   		$("#main-blackPoint").append("<li></li>");
	   };//添加5个圆点
	  	let count=0;
	  	const fig=$(".roll figure");//获取图像的父移动框
	   	const blackPoint=$("#main-blackPoint li"); //黑点
	   	const pic=$(".roll img");//图片
	   	const picWidth=pic.width()//获取图片的宽度	   	
	   
	   	//定义滚动函数
   	const moveImage=function(){
			let nun = parseInt(fig.position().left)/-picWidth;//获取鼠标事件当前图片的位置
			let count =nun;
			count++;
			const wid=-picWidth*count;
			fig.animate({left:wid},0);	//疑点：animate写里面的参数时我总是纠结里面的单位px
			if(count>4){//少一张
				count=0;
				fig.animate({left:0},0);
			}
			 let $black_i =$(blackPoint[count]);
		   	 $black_i.css("background-color","rgba(255,255,255,1)");
		     blackPoint.not($black_i).css("background-color","rgba(255,255,255,0.2)");
	};    
    let timer=setInterval(moveImage,3000);

    for(let i=0;i<blackPoint.length;i++){
			const $blackPoint_i = $(blackPoint[i]); 
   			 $blackPoint_i.hover(function(){
			    	clearInterval(timer);
			    	$(this).css("background-color","rgba(255,255,255,1)");
			    	blackPoint.not($(this)).css("background-color","rgba(255,255,255,0.2)");
			    	const shift=-picWidth*i;
			    	fig.animate({left:shift},0) 	
		 	 },function(){
					timer = setInterval(moveImage,3000);
		 	 })
		}; 	
   //头像下面栏目事件的监听
     let num=0; 
     $("#lanmu").html(num);
	$("body").on("click",function(event){
        const tag=event.target.tagName.toLowerCase(); 
        if(tag=="a"){
        	num++;
			$("#lanmu").html(num);
       		 	} 
           	})

	$(".head-top-exit button").click(function(){
		window.location.href="cart.html"
	})	
})
