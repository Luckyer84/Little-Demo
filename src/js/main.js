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
    const a=$(".head-bottom ul").children();
    for(let i=0;i<a.length;i++){
      const d=$(".d"); 
	  const $a = $(a[i]); 
	  const $d = $(d[i]);
    $a.on({
		"mouseenter":function(){		
	$d.animate({"width":"5.2em","left":"-1.3em","opacity":1});	
	},
	 "mouseleave":function(){
		$d.animate({"width":0,"left":"1.3em","opacity":0});
	},
	});
}
    //导航栏弹窗
    const li=$("#uu").children();
    for(let i=0;i<li.length;i++){
    	const winlist=$(".window-list"); 
    	const $li = $(li[i]); 
	  const $winlist = $(winlist[i]);
	  $li.hover(function(){
	  	$winlist.css("display","block");
	  	winlist.not($winlist).css("display","none");
	  },function(){  	
	  	$winlist.mouseover(function(){
	  		$winlist.css("display","block")
	  	});
		$winlist.mouseout(function(){
	  		$winlist.css("display","none")
	  });
	  })
    }
    //更改头像
   $(".aside-personInfo").hover(function(){
   	$(".change-head").toggle()
   })
   
   //图片切换
    const pic=$(".body-main figure");//图片
    const blackPoint=$("#main-blackPoint li"); //黑点
    for(let i=0;i<blackPoint.length;i++){
	  const $pic_i = $(pic[i]); 
	  const $blackPoint_i = $(blackPoint[i]);
    $blackPoint_i.hover(function(){
    
	  	$pic_i.css("display","block");
	  	pic.not($pic_i).css("display","none");
	  })
}
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
		window.location.href="login.html"
	})
	
})
 