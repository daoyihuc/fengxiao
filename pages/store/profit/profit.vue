<template>
	<view class="content">
		<view class="card">
			<view class="top_img" @tap='black'>
				<image src="../../../static/img/store/left.png" mode="" @tap="black"></image>
				<text>详情</text>
			</view>
			<view class="fot_img">
				<view class="left">
					我的积分
				</view>
			</view>
			<!-- 金额 -->
			<view class="money">
				54654.00
			</view>
			<view class="add">
				<text>累积积分</text>
				<text>1215.00</text>
			</view>
			<view class="bot" @tap='Withdrawal'>
				提现
			</view>
			<view class="right" @tap='Withdrawal_list'>
				<view class="">
					提现记录
				</view>
				<image src="../../../static/img/store/right.png" mode=""></image>
			</view>
		</view>
		<loading v-if="isShow == true"></loading>
		<Lists :logList="logList"></Lists>
		


	</view>
</template>

<script>
	import loading from "../../../components/public/loading.vue";
	import Lists from "../../../components/Lists/Lists.vue";
	export default {
		data() {
			return {
				logList: [
					{
						time:'2020-10-25',
						title:'万家丽',
						money:'50'
					},
					{
						time:'2020-10-25',
						title:'开福区',
						money:'50'
					},
					{
						time:'2020-10-25',
						title:'万达',
						money:'50'
					}
				],
				isShow: true

			}
		},
		onLoad: function(options) {
			setTimeout(() => {
				this.isShow = false
			}, 600);
		},
		
		methods: {
			/* 提现记录 */
			Withdrawal_list(){
				uni.navigateTo({
					url:'../../index/Recurrence/Recurrence'
				})
			},
			/* 提现页面跳转 */
			Withdrawal(){
				uni.navigateTo({
					url:'../../index/Withdrawal/Withdrawal'
				})
			},
			/* 返回 */
			black(){
				uni.navigateBack({
					delta:1
				})
			},

		},
		components: {
			loading,
			Lists
		},
	}
</script>

<style lang="scss">
	.content {
		.card {
			width: 100%;
			height: 480rpx;
			background-size: 100% 100%;
			background: linear-gradient(72deg, #FF444B, #FD7239);
		}

		.top_img {

			display: flex;
			padding: 50rpx 0;
			font-size: 20px;
			color: #FFFFFF;

			text {
				text-align: center;
				margin-left: 40%;
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

		.bot {
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

		.right {
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

	}
</style>
