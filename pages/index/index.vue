<template>
	<view class="content">
		<view class="top_bg">
			卡包
		</view>
		<view class="card_img">
			<view class="top">
				<view class="top_left">
					获取积分<text style="padding-left: 20rpx;">(10积分<text style="color: #FA5F3E;">兑</text>1元)</text>
				</view>
				<image src="../../static/img/index/erweima.png" mode=""></image>
			</view>
			<view class="center">
				<view class="center_left">
					54654.00
				</view>
				<view class="center_right" @tap='Withdrawal'>
					提现
				</view>
			</view>
			<view class="fot">
				<view class="fot_left" @tap='obtain'>
					<image src="../../static/img/index/huoqu.png" mode=""></image>
					<text>获取记录</text>
				</view>
				<view class="fot_center">

				</view>
				<view class="fot_right" @tap="recurrence">
					<image src="../../static/img/index/tixian.png" mode=""></image>
					<text>提现记录</text>
				</view>
			</view>
		</view>
		<!-- 卡片样式 -->
		<view class="card">
			<view class="card_top">
				<view class="row">
				</view>
				<text>近期消费</text>
			</view>
			<view class="card_list">
				<view class="card_li" v-for="(item,index) in 10" :key='index' @tap='store_info'>
					<view class="card_li_left">
						<view class="">
							<image src="../../static/img/index/dianpu.png" mode=""></image>
							<text>万家丽店</text>
						</view>
						<view class="text">
							<image src="../../static/img/index/dizhi.png" mode=""></image>
							<text>开福区万达国际c3栋1005开福区万达国际c3栋1005开福区万达国际c3栋1005</text>
						</view>
					</view>
					<view class="card_li_center">

					</view>
					<view class="card_li_right">
						<view class="bot_top">
							剩余：2000
						</view>
						<view class="bot_top active">
							积分：2000
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 页面加载 -->
		<loading v-if="isShow == true"></loading>
	</view>
</template>

<script>
	import loading from "../../components/public/loading.vue";
	/* 接口名称 */
	import { getIndexData } from "../../api/Index/index.js"
	 export default{
		data() {
			return {
				isShow: true
			}
		},
		onLoad() {
			getIndexData({
				district_name: '开福区'
			}).then(res => {
				console.log(res)
			})
	
			setTimeout(() => {
				this.isShow = false
			}, 1000)
	
		},
		methods: {
			/* 提现跳转 */
			recurrence() {
				uni.navigateTo({
					url: 'Recurrence/Recurrence'
				})
			},
			/* 获取记录*/
			obtain() {
				uni.navigateTo({
					url: 'obtain/obtain'
				})
			},
			/* 提现跳转 */
			Withdrawal() {
				uni.navigateTo({
					url: 'Withdrawal/Withdrawal'
				})
			},
			/* 房屋跳转 */
			store_info() {
				uni.navigateTo({
					url: 'store_info/store_info'
				})
			},
	
		},
		components: {
			loading
		}
	}
	
</script>

<style lang="scss">
	page {
		background: #FAFAFA;
	}

	.content {
		display: flex;
		flex-direction: column;
		// align-items: center;
		justify-content: center;

		.top_bg {
			width: 100%;
			height: 300rpx;
			background: linear-gradient(72deg, #FF444B, #FD7239);
			text-align: center;
			color: #fff;
			font-size: 15px;
			padding-top: 60rpx;
			border-radius: 0 0 20px 20px;
		}

		.card_img {
			width: 100%;
			height: 400rpx;
			background: url(../../static/img/index/beijingh.png) no-repeat;
			background-size: 100% 100%;
			margin-top: -28.5%;

			.top {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 40rpx 50rpx;
				font-size: 16px;

				image {
					width: 80rpx;
					height: 80rpx;
				}

				text {
					font-size: 13px;
				}
			}

			.center {
				padding: 0 50rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.center_left {
					font-size: 30px;
					font-weight: bold;
					color: #FA5F3E;
				}

				.center_right {
					width: 150rpx;
					height: 60rpx;
					line-height: 60rpx;
					font-size: 14px;
					background-color: #FA5F3E;
					border-radius: 50rpx;
					color: #fff;
					text-align: center;
					box-shadow: -1px 2px 5px 0px rgba(250, 95, 62, 0.6);
				}
			}

			.fot {
				font-size: 14px;
				color: #333333;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-top: 1px solid #eee;
				padding: 30rpx;
				width: 610rpx;
				margin: 50rpx auto;

				image {
					width: 30rpx;
					height: 30rpx;
				}

				.fot_center {
					width: 1px;
					height: 20px;
					background-color: #FE5445;
				}

				view {
					display: flex;
					align-items: center;

					text {
						padding-left: 10rpx;
						color: #7f7f7f;
					}
				}
			}
		}

		.card {
			background-color: #FFFFFF;
			box-shadow: 0px 3px 21px 0px rgba(168, 168, 168, 0.17);
			margin: 10rpx 20rpx;
			border-radius: 20rpx;

			.card_top {
				font-size: 16px;
				color: #333333;
				display: flex;
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
			}

			.card_list {
				.card_li{
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-top: 1px solid #eee;
				padding: 30rpx;

				image {
					width: 30rpx;
					height: 30rpx;
				}
				.card_li_left{
					view{
						display: flex;
						align-items: center;
						padding: 10rpx 0;
						text{
							width: 350rpx;
							font-size: 14px;
							color: #555555;
							padding-left: 10rpx;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 1;
							-webkit-box-orient: vertical;
						}
					}
				}
				.card_li_center {
					width: 1px;
					height: 50px;
					background-color: #eee;
				}
				.card_li_right{
					.bot_top{
						border: 1px solid #fd5e3e;
						border-radius: 19px;
						font-size: 14px;
						color: #fd5e3e;
						padding: 5rpx 20rpx;
						margin-top: 20rpx;
					}
					.active{
						background-color:#fd5e3e;
						color: #FFFFFF;
					}
				}
				
			}
			}
		}
	}
</style>
