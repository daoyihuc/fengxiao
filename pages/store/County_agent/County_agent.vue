<template>
	<view class="content">
		<view class="" v-if="true">
			<view class="card_top">
				<view class="left">
					<view class="row">
					</view>
					<text>县级代理店</text>
				</view>

				<view class="right" @tap='profit_url'>
					<view class="">
						收益记录
					</view>
					<image src="../../../static/img/store/right.png" mode=""></image>
				</view>
			</view>
			<!-- 店铺详情 -->
			<view class="title_top" v-for="(item,index) in 3">
				<view class="left">
					<image src="../../../static/img/index/beijingh.png" mode=""></image>
				</view>
				<view class="right">
					<view class="img_li">
						<text style="font-weight: 600;font-size: 15px;">万家丽店</text>
					</view>
					<view class="img_li">
						<text>电话：14760716236</text>
					</view>
					<view class="img_li">
						<text>地址：开福区万达国际总部c3栋1005开福区万达国际总部c3栋1005</text>
					</view>
					<view class="bot" @tap='store_url'>
						查看
					</view>

				</view>
			</view>
		</view>
		<view class="agent_img" v-if="false">
			<image src="../../../static/img/store/quesheng2.png" mode=""></image>
			<view class="agent_name">
				您还不是县级代表，联系客服获取权限~
			</view>
			<view class="bot">
				联系客服
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			/* 门面详情 */
			store_url() {
				uni.navigateTo({
					url: '../Store_info/Store_info'
				})
			},
			/* 收益 */
			profit_url() {
				uni.navigateTo({
					url: '../profit/profit'
				})
			}
		}
	}
</script>

<style lang="scss">
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
		justify-content: space-between;
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
