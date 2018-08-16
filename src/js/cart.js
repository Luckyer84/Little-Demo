var vm=new Vue({
	el:"#app",
	data:{
		list:[],
		num:0,
		totalMoney:0,
		flag:false,
		isShow:false,
		ok:false
	},
	mounted: function() {
		//获取数据
		this.$nextTick(function(){
			this.getList();
		})
	},
	methods:{
		//获取数据
		getList:function(){
			this.$http.get("vue-cart.json").then((res) =>{
				this.num=res.data.code;
				if(this.num===200){
					this.list=res.data.message;	
					}
				})		
		},
		//选中
		selectedProduct:function(item){
			item.checked=!item.checked;
			this.computePrice()
		},
		//全选
		checkall:function(){
			this.flag=!this.flag;
				if(this.flag){
				this.list.forEach(function(value){
					value.checked=true;
				})
			}else{
				this.list.forEach(function(value){
					value.checked=false;
				})
			}
			this.computePrice();
		},
		
		//数量的加减
		changeNum:function(item,index){
			if(index>0){
				item.count++
			}else{
				item.count--;
				if(item.count<1){
					item.count=1
				}
			}
			this.computePrice();
		},
		//金额的计算
		computePrice:function(){
			const self=this;
			self.totalMoney=0;
			this.list.forEach(function(item){
				if(item.checked){
					self.totalMoney +=item.price*item.count;
				}
			})
		},
		deleteItem:function(){
			this.isShow=true;
			
		},
		isConfirm:function(value){
			const index = this.list.indexOf(value);
			this.list.splice(index,1);
			this.computePrice();
			this.isShow=false;
			this.ok=true;
			
		},
		isCancel:function(){
			this.isShow=false;
			this.ok=true;
		},
		
		//总金额
		/*jisuan:function(value){
				const self=this;
				const newarr=[];
				const index = self.list.indexOf(value);//当前下标
				const arr=self.list;
				const arrson = arr[index];
				arrson.checked= !arrson.checked;
				/*alert(arrson.checked);*/
				/*newarr.push(arr[index]);*/
			/*	console.log(newarr[0].checked);
				newarr.forEach(function(item){
				if(item.checked){
					self.totalMoney +=item.amount;	
				}else{
					self.totalMoney -=item.amount
				}
			})
		},*/
		pay:function(){
			alert("总共需要支付" +  this.totalMoney +"元")
		}
	},
		
})

		