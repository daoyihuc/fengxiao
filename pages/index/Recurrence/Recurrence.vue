<template>
	<view>
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
	import {WithdrawalList} from '../../../api/Index/index.js'
	export default {
		data() {
			return {
				logList: [],
				isShow: true,
				Page:1,//页码
				data:[],//所有数据
			};
		},
		onLoad: function(options) {
			this.getdata();
		},
		onReachBottom: function() {
			this.Page++;
			this.list=[];
			this.getdata();
		},
		/* 分享 */
		 onShareAppMessage(res){
			 
		 },
		methods: {
			/* 获取所有数据 */
			getdata(){
				WithdrawalList({
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
							json.title='提现';
							json.money=this.data[i].money;
							json.statust=this.data[i].status;
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
		
	};
</script>
<style scoped lang="scss">
</style>
