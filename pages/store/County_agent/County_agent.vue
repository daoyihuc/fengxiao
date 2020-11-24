<template>
	<view class="content">
		
		<view class="" v-if="county_agent==1">
			<!-- <view class="card">
				<view class="top_img" @tap='black'>
					<image src="../../../static/img/store/left.png" mode="" @tap="black"></image>
					<text>县级代理</text>
				</view>
				<view class="fot_img">
					<view class="left">
						我的积分
					</view>
				</view>
				<view class="money">
					{{data.county_agent_money}}
				</view>
				<view class="add">
					<text>累积积分</text>
					<text>{{data.county_agent_total_money}}</text>
				</view>
				<view class="bots" @tap='Withdrawal'>
					提现
				</view>
				<view class="rights" @tap='Withdrawal_list'>
					<view class="">
						提现记录
					</view>
					<image src="../../../static/img/store/right.png" mode=""></image>
				</view>
			</view> -->
			<view class="top_img" @tap='black' style="position: absolute; top: 5rpx;width: 100%;">
				<image src="../../../static/img/store/left.png" mode="" @tap="black"></image>
				<text>县级代理</text>
			</view>                
			<image src="../../../static/jiaruwomen.png" style="width: 100%;" mode=""></image>
			<view class="card_top">
				<view class="left">
					<view class="row">
					</view>
					<text>我的店铺</text>
				</view>

				<view class="right"@tap='profit_urls' >
					<view class="">
						收益记录
					</view>
					<image src="../../../static/img/store/right.png" mode=""></image>
				</view>
			</view>
			<!-- 店铺详情 -->
			<view class="title_top" v-for="(item,index) in StoreList" :key='index'>
				<view class="left">
					<image :src="item.logo" mode=""></image>
				</view>
				<view class="right">
					<view class="img_li">
					     <text style="font-weight: 600;font-size: 15px;">{{item.store_name}}</text>
					</view>
					<view class="img_li">
					     <text>电话：{{item.mobile}}</text>
					</view>
					<view class="img_li">
					     <text>地址：{{item.district}}</text>
					</view>
					<view class="bot" @tap='profit_url(item)'>
						查看
					</view>
				</view>
			</view>
			<view style="font-size: 14px;text-align: center;color: #555555;" v-if="StoreList.length==0">
				暂无店铺
			</view>
		</view>
		<view class="agent_img" v-if="county_agent==0">
			<view class="top_img" @tap='black'>
				<image src="../../../static/img/store/left1.png" mode="" @tap="black"></image>
				<text>县级代理</text>
			</view>
			<image src="../../../static/img/store/quesheng2.png" mode=""></image>
			<view class="agent_name">
				您还不是县级代表，联系客服获取权限~
			</view>
			<view class="bot" @tap='phone'>
				联系客服
			</view>
		</view>
	</view>

</template>

<script>
	import {CountyGgent,CountyGgentProfit} from '../../../api/store/store.js'
	export default {
		data() {
			return {
				county_agent:null,//是否是代理
				Page:1,//页面
				StoreList:[],//门店列表
				data:{},//所有数据

			}
		},
		/* 分享 */
		 onShareAppMessage(res){
			 
		 },
		onLoad() {
			this.county_agent=uni.getStorageSync('county_agent');
			this.getdata();
		},
		/* 上拉刷新 */
		onReachBottom(){
			this.Page++;
			this.getdata();
		},
		methods: {
			/* 门面详情 */
			store_url(item) {
				uni.navigateTo({
					url:'../Store_info/Store_info?id='+item.id
				})
			},
			/* 收益记录详情 */
			profit_urls() {
				uni.navigateTo({
					url: '../profit/profit'
				})
			},
			/* 收益 */
			profit_url(item) {
				uni.navigateTo({
					url: '../profit/profit?id='+item.id
				})
			},
			/* 返回 */
			black(){
				uni.navigateBack({
					delta:1
				})
			},
			/* 提现记录 */
			Withdrawal_list(){
				uni.navigateTo({
					url:'../../index/Recurrence/Recurrence'
				})
			},
			/* 提现页面跳转 */
			Withdrawal(){
				uni.navigateTo({
					url:'../../index/Withdrawal/Withdrawal?type=1'
				})
			},
			/* 拨打电话 */
			phone(){
				uni.makePhoneCall({
				    phoneNumber: uni.getStorageSync('phone') //仅为示例
				});
			},
			
			/* 获取页面数据*/
			getdata(){
				CountyGgent({
					token:uni.getStorageSync('token'),
					Page:this.Page
				}).then(res=>{
					if(res.code==0){
						this.data=res.data;
						this.StoreList=[...this.StoreList,...res.data.List];
					}else{
						uni.showToast({
							title:res.msg,
							icon:"none",
							success: () => {
								/* 登录过期token=0 */
								uni.setStorageSync('token','0');
								uni.switchTab({
									url:'../../our/our'
								})
							}
						})
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	
	.card {
		width: 100%;
		height: 520rpx;
		background-size: 100% 100%;
		background: linear-gradient(72deg, #FF444B, #FD7239);
	}
	
	.top_img {
	
		display: flex;
		padding: 70rpx 0;
		font-size: 15px;
		color: #FFFFFF;
	
		text {
			text-align: center;
			margin-left: 35%;
		}
	
		image {
			width: 50rpx;
			height: 50rpx;
		}
	}
	
	.fot_img {
		color: #FFFFFF;
		font-size: 14px;
		text-align: center;
	}
	
	.money {
		text-align: center;
		color: #FFFFFF;
		font-size: 30px;
		font-weight: 600;
		padding: 15rpx 0;
	}
	
	.add {
		font-size: 14px;
		color: #f0f0f0;
		text-align: center;
	
		text {
			padding: 0 10rpx;
		}
	}
	
	.bots {
		width: 120rpx;
		height: 50rpx;
		line-height: 50rpx;
		margin: 20rpx auto;
		font-size: 14px;
		text-align: center;
		background-color: #FFFFFF;
		color: #FA4934;
		border-radius: 30rpx;
	}
	
	.rights {
		color: #FFFFFF;
		font-size: 14px;
		text-align: center;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 10rpx 20rpx;
	
		image {
			width: 40rpx;
			height: 40rpx;
		}
	}
	
	.card_top {
		font-size: 16px;
		color: #333333;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-weight: bold;
		padding: 30rpx;


		.row {
			height: 20px;
			width: 2px;
			background-color: #FA5F3E;
		}

		text {
			padding-left: 20rpx;
		}

		.left {
			display: flex;
		}

		.right {
			display: flex;
			align-items: center;
			font-size: 14px;
			color: #FA5F3E;

			image {
				width: 40rpx;
				height: 40rpx;
			}
		}

	}

	.title_top {
		display: flex;
		// justify-content: space-between;
		padding: 20rpx;
		border-top: 1px solid #eee;
		color: #4d4d47;

		image {
			width: 300rpx;
			height: 230rpx;
		}

		.right {
			padding-left: 10rpx;

			.img_li {
				font-size: 14px;
				padding-top: 15rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;

				image {
					width: 30rpx;
					height: 30rpx;
				}

				text {
					padding-left: 15rpx;
				}

			}

			.bot {
				width: 110rpx;
				height: 50rpx;
				font-size: 14px;
				color: #FFFFFF;
				background: linear-gradient(72deg, #FF444B, #FD7239);
				border-radius: 50rpx;
				text-align: center;
				line-height: 50rpx;
				margin: 20rpx;
			}
		}

	}

	/* 没有代理 */
	.agent_img {
		margin: auto;

		.agent_name {
			text-align: center;
			color: #999999;
			font-size: 14px;
		}

	}

	.bot {
		margin: 50rpx auto;
		width: 200rpx;
		height: 70rpx;
		line-height: 70rpx;
		color: #FFFFFF;
		text-align: center;
		background: linear-gradient(111deg, #FF4A16, #FFA25D);
		border-radius: 26px;

	}
</style>
