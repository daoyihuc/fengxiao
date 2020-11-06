<template>
	<view class="content">
		<view class="top_img">
			<image src="../../../static/img/store/left.png" mode="" @tap="black"></image>
			<text>门店</text>
		</view>
		<!-- 店面 -->
		<view class="store">
			<view class="left">
				<view class="store_name">
					莫格(moge)万家丽长沙门店
				</view>
				<view class="text_li">
					长沙市开福区万达国际总部C3栋1005
				</view>
				<view class="text_li">
					联系电话：15857772121
				</view>
			</view>
			<view class="right" @tap='share'>
				<image src="../../../static/img/store/fenxiang.png" mode=""></image>
			</view>
		</view>
		<view class="card_top">
			<view class="row">
			</view>
			<text>门店介绍</text>
		</view>
		<view class="info">

			门店简介门店简介门店简介门店简介门店简介门店简介门店
			简介门店简介门店简介门店简介门店简介门店简介门店简介
			门店简介门店简介门店简介门店简介门店简介门店简介门店
			简介门店简介门店简介门店简介门店简介门店简介门店简介
			门店简介门店简介门店简介门店
			简介门店简介门店简介门店简介门店简介门店简介门店简介
			门店简介门店简介门店简介门店简介门店简介门店简介门店
			简介门店简介门店简介门店简介门店简介门店简介门店简介
			门店简介门店简介门店简介门店

		</view>

		<!-- 页面加载 -->
		<loading v-if="isShow == true"></loading>
	</view>
</template>

<script>
	import loading from "../../../components/public/loading.vue";
	export default {
		data() {
			return {
				isShow: true
			}
		},
		onLoad() {
			setTimeout(() => {
				this.isShow = false
			}, 1000)

		},
		methods: {
			/* 分享 */
			share() {
				uni.navigateTo({
					url: '../store_share/store_share'
				})
			},
			/* 返回 */
			black() {
				uni.navigateBack({
					delta: 1
				})
			},

		},
		components: {
			loading
		}
	}
</script>

<style lang="scss">
	.content {
		.top_img {
			width: 100%;
			height: 400rpx;
			background: url(https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=339984553,3509384023&fm=26&gp=0.jpg) no-repeat;
			background-size: 100% 100%;
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

		.store {
			background-color: #fff;
			border-radius: 50rpx 50rpx 0 0;
			padding: 35rpx 30rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: -40rpx;
			border-bottom: 10rpx solid #eee;

			.store_name {
				font-weight: 600;
			}

			.text_li {
				font-size: 14px;
				color: #4b4b4b;
				padding-top: 15rpx;
			}

			image {
				width: 100rpx;
				height: 100rpx;
			}
		}

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
		.info{
			padding: 20rpx;
			font-size: 14px;
		}

	}
</style>
