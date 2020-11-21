<template>
	<view class="content">
		<view class="list">
			<view class="li" v-for="(item,index) in list">
				<view class="top">
					<view class="">
						{{item.dateline}}
					</view>
					<view class="">
					 {{item.status==0||item.status==1?'已冻结':''}}
					</view>
				</view>
				<view class="fot">
					<view class="left">
						<text>用户id：</text>{{item.nickname}}
					</view>
					<view class="right">
						{{item.money}}
					</view>
				</view>
			</view>
			
		</view>
		<view class="wait" v-if="list==0">
			<image src="../../../static/img/store/quesheng1.png" mode=""></image>
		     <view class="text" style="text-align: center;font-size: 14px; color: #808080;" >
		     	暂无数据
		     </view> 	
		</view>
		<loading v-if="isShow == true"></loading>
		
	</view>
</template>

<script>
	import loading from "../../../components/public/loading.vue";
	/* 接口 */
	import {PromotionLog} from '../../../api/Center/Center.js'
	export default {
		data() {
			return {
				page:1,//页面
				list:[],//数据
			}
		},
		/* 上拉刷新 */
		onReachBottom() {
			this.page++;
			this.getdata();
		},
		/* 分享 */
		 onShareAppMessage(res){
			 
		 },
		onLoad() {
			this.getdata();
		},
		methods: {
			/* 获取列表数据 */
			getdata(){
				PromotionLog({
					token:uni.getStorageSync('token'),
					Page:this.page
				}).then(res=>{
					if(res.code==1){
						this.list=[...this.list,...res.data.List];
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
					}
				})
			},
		},
		components: {
			loading,
		},
	}
</script>

<style lang="scss">
	page{
		background-color: #f1f1f1;
	}
	.content{
		.list{
			.li{
				background-color: #FFFFFF;
				border-radius: 20rpx;
				margin: 20rpx;
				.top{
					font-size: 14px;
					color: #d6d6d6;
					padding: 20rpx;
					border-bottom: 1px solid #eee;
					display: flex;
					justify-content: space-between;
				}
				.fot{
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: 16px;
					padding: 20rpx;
					color: #3a3a3a;
					.right{
						color: #FA5F3E;
					}
				}
			}
		}
	}

</style>
