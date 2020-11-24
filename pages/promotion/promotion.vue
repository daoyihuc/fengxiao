<template>
	<view class="content">
		<!-- 卡片 -->
		<!-- <view class="top_card">
			<view class="top">
				<view class="left">
					<view class="text">
						推广积分
					</view>
					<view class="img_money">
						<image src="../../static/img/promotion/jifen.png" mode=""></image>
						<text>{{data.promotion_balance}}</text>
					</view>
				</view>
				<view class="right" @tap='Withdrawal'>
					立即提现
				</view>
			</view>
			<view class="row">

			</view>
			<view class="fot">
				<view class="left">
					<text>累计已获得</text>
					<text>{{data.promotion_total_balance}}</text>
				</view>
				<view class="right" @tap='Recurrence'>
					提现记录
					<image src="../../static/right.png" mode=""></image>
				</view>
			</view>
		</view>
		 -->
		<image src="../../static/9aed159248d614811aa7b3c8a125afc.png" style="width: 100%;" mode=""></image>
		<view class="card_top">
			<view class="left">
				<view class="row">
				</view>
				<text>推广中心</text>
			</view>

		</view>
		<!-- tab卡片 -->
		<view class="tab_card">
			<view class="tab_card_list">
				<view class="tab_li" v-for="(item,index) in tab_list" @tap='tap_car_url(item)'>
					<image :src="item.image" mode=""></image>
					<view class="text">
						{{item.text}}
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import { PromotionCenter } from '../../api/Center/Center.js'
	export default {
		data() {
			return {
				tab_list:[
					{
						image:'../../static/mendian.png',
						text:'推广门店',
						url:'Integral_center/Integral_center'
					},
					{
						image:'../../static/img/promotion/tuiguanghaibao.png',
						text:'推广海报',
						url:'Poster/Poster'
					},
					{
						image:'../../static/huiyuan.png',
						text:'推广会员',
						url:'record/record'
					},
					{
						image:'../../static/img/promotion/tuiguang.png',
						text:'推广统计',
						url:'Promotion_rules/Promotion_rules'
					}
					
				],
				data:{},//所有数据

			}
		},
		/* 分享 */
		 onShareAppMessage(res){
			 
		 },
		onLoad() {
			this.getdata();
		},
		methods: {
			/* 提现 */
			Withdrawal(){
				uni.navigateTo({
					url:'../index/Withdrawal/Withdrawal?type=2'
				})
			},
			/* 提现记录 */
			Recurrence(){
				uni.navigateTo({
					url:'../index/Recurrence/Recurrence'
				})
			},
			/* 小卡片跳转 */
			tap_car_url(item){
				uni.navigateTo({
					url:item.url
				})
			},
			/* 获取数据 */
			getdata(){
				PromotionCenter({
					token:uni.getStorageSync('token')
				}).then(res=>{
					if(res.code==1){
						this.data=res.data;
						
					}else{
						uni.showToast({
							title:res.msg,
							icon:"none",
							success: () => {
								/* 登录过期token=0 */
								uni.setStorageSync('token','0');
								uni.switchTab({
									url:'../our/our'
								})
							}
						})
					}
				})
			}

		}
	}
</script>

<style lang="scss">
	.content {
		.card_top {
			background-color: #FFFFFF;
			border-radius: 20rpx 20rpx 0 0;
			position: absolute;
			top: 450rpx;
			width: 100%;
			// padding: 40rpx;
			.left{
				font-size: 16px;
				color: #333333;
				display: flex;
				margin-top: -20rpx;
				align-items: center;
				font-weight: bold;
				padding:50rpx;
			}
			.right{
				display: flex;
				align-items: center;
				font-size: 14px;
				color: #d1d1d1;
				image {
					width: 30rpx;
					height: 30rpx;
				}
				
			}
			display: flex;
			align-items: center;
			justify-content: space-between;
			// padding: 30rpx;
		
			.row {
				height: 20px;
				width: 2px;
				background-color: #FA5F3E;
			}
		
			text {
				padding-left: 20rpx;
			}
		}
		.top_card {
			margin: auto;
			width: 95%;
			// height: 500rpx;
			background: linear-gradient(72deg, #ff4810, #FD7239);
			// background: url(../../static/img/promotion/beij1.png);
			box-shadow: -1px 2px 5px 0px rgba(250, 127, 69, 0.6);
			color: #FFFFFF;
			border-radius: 20rpx;

			.top {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.left {
					font-size: 14px;
					padding: 50rpx 20rpx 10rpx 50rpx;

					image {
						width: 50rpx;
						height: 50rpx;
						padding-right: 10rpx;
					}

					.img_money {
						display: flex;
						align-items: center;
						font-size: 30px;
						padding: 20rpx 0;
					}

				}

				.right {
					color: #FA5F3E;
					background-color: #FFFFFF;
					height: 50rpx;
					font-size: 15px;
					text-align: center;
					line-height: 50rpx;
					padding: 0 20rpx;
					border-radius: 25rpx 0 0 25rpx;
				}
			}

			.row {
				height: 1px;
				width: 80rpx;
				background-color: rgba(255, 255, 255, .8);
				margin-left: 60rpx;

			}

			.fot {
				padding: 50rpx 20rpx 20rpx 50rpx;
				font-size: 14px;
				display: flex;
				justify-content: space-between;
				align-items: center;

				image {
					width: 35rpx;
					height: 35rpx;
				}

				.right {
					align-items: center;
					display: flex;
				}
			}
		}

		/* tab卡片 */
		.tab_card {
			
			.tab_card_list {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				margin-top: 70rpx;
				padding: 10rpx;

				.tab_li {
					padding:70rpx 0;
					width: 46%;
					background: #FFFFFF;
					box-shadow: 0px 0px 24px 0px rgba(217, 217, 217, 0.4);
					border-radius: 20rpx;
					font-size: 14px;
					text-align: center;
					margin: 10rpx 0;
					// margin-left: 15rpx;

					image {
						width: 90rpx;
						height: 90rpx;
					}
				}
			}
		}
	}
</style>
