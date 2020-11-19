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
	import { RecurrenceRecord} from '../../../api/Index/index.js'
	export default {
		data() {
			return {
				logList: [],
				isShow: true,
				Page:1,//页码
				data:[],//所有数据
			};
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			this.getdata();
		},
		onReachBottom: function() {
			this.Page++;
			this.getdata();
		},
		/* 分享 */
		 onShareAppMessage(res){
			 
		 },

		methods: {
			/* 获取所有数据 */
			getdata(){
				RecurrenceRecord({
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
	};
</script>
<style scoped lang="scss">
</style>
