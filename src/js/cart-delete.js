$(document).ready(function(){
			const deleteBtn=$(".delete-btn");
			const $container=$(".alert-container");
			 for(let i=0;i<deleteBtn.length;i++){
			 	const $deleteBtn=$(deleteBtn[i]);
			 	 $deleteBtn.click(function(){
			 	 	$container.animate({top:"40%"},500);
			 	 	$container.addClass("trt");
				}) 
				     }
							})
