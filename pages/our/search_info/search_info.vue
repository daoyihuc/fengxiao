<template>
	<view class="content">
		<view class="info">
			<view class="left">
				<image src="../../../static/img/our/store/beinjing.png" mode=""></image>
			</view>
			<view class="right">
				<view class="top">
					<text>小仙女</text>
					<text class="text">剩余：2000</text>
					<text class="text">总消费：2000</text>
				</view>
				<view class="fot">
					<text>已消费(3个月内)：<text style="color: #FA5F3E;">2000</text></text>
					<text style="padding-left: 15rpx;">距返现相差金额：<text style="color: #FA5F3E;">2000</text></text>
				</view>
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
			
		}
	}
</script>

<style lang="scss">
	.content{
		.info{
			display: flex;
			align-items: center;
			padding: 20rpx;
			border-top: 1px solid #EEEEEE;
			border-bottom: 1px solid #EEEEEE;
			.left{
				image{
				    width: 120rpx;
					height: 120rpx;
					border-radius: 50%;
				}
			}
			.right{
				padding: 0 10rpx;
				.top{
					font-size: 14px;
					.text{
						color: #FA5F3E;
						border: 1px solid #FA5F3E;
						border-radius: 20rpx;
						padding:0 10rpx;
						margin: 0 15rpx;
						font-size: 12px;
					}
				}
				.fot{
					padding-top: 10rpx;
					font-size: 12px;
				}
			}
		}
	}

</style>
