<template>
	<view class="content">
		<loading v-if="isShow == true"></loading>
		<Lists :logList="logList"></Lists>
		<view class="wait" v-if="logList.length==0">
			<image src="../../../static/img/store/quesheng1.png" mode=""></image>
		     <view class="text" style="text-align: center;font-size: 14px; color: #808080;" >
		     	暂无数据
		     </view>
				 	
		</view>
	</view>
</template>

<script>
	import loading from "../../../components/public/loading.vue";
	import Lists from "../../../components/Lists/Lists.vue";
	/* 接口 */
	import {CountyGgentDetail,CountyGgentProfit} from '../../../api/store/store.js'
	export default {
		data() {
			return {
				logList: [],
				isShow: true,
				StoreId:null,//门店ID
				Page:1,//页码
				data:[],//所有数据

			}
		},
		/* 分享 */
		 onShareAppMessage(res){
			 
		 },
		onLoad: function(e) {
			if(e.id){
				this.StoreId=e.id;
				this.getdata();
			}else{
				this.getdata_new();
			}
			
		},
		onReachBottom: function() {
			this.Page++;
			this.getdata();
		},
		
		methods: {
			/* 获取所有数据 */
			getdata(){
				CountyGgentDetail({
					StoreId:this.StoreId,
					Page:this.Page,
					token:uni.getStorageSync('token')
				}).then(res=>{
					if(res.code==1){
						this.data=res.data.List;
						this.isShow = false;
						var arr=[];
						for(var i in this.data){
							var json={};
							json.time=this.data[i].dateline;
							json.title=this.data[i].StoreName;
							json.money=this.data[i].money;
							json.statust=3;
							arr.push(json);
						}
						this.logList=[...this.logList,...arr];
					}
				})
			},
		   
		   /* 获取收益详情 */
		   getdata_new(){
		   	CountyGgentProfit({
		   		Page:this.Page,
		   		token:uni.getStorageSync('token')
		   	}).then(res=>{
		   		if(res.code==1){
		   			this.data=res.data.List;
		   			this.isShow = false;
		   			var arr=[];
		   			for(var i in this.data){
		   				var json={};
		   				json.time=this.data[i].dateline;
		   				json.title=this.data[i].StoreName;
		   				json.money=this.data[i].money;
		   				json.statust=3;
		   				arr.push(json);
		   			}
		   			this.logList=[...this.logList,...arr];
		   		}
		   	})
		   }
		   	

		},
		components: {
			loading,
			Lists
		},
	}
</script>

<style lang="scss">
	.content {
		
	}
</style>
