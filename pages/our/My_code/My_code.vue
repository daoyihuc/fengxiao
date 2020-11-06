<template>
	<view class="content">
		<view class="auto">
			<image class="image_name" src="../../../static/img/index/erweima.png" mode=""></image>
			<view class="name">
				小仙女
			</view>
			<view class="code">
			   扫描下方二维码加我
			</view>
			<image class="image_code" src="../../../static/img/our/erweimaw.png" mode=""></image>
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
		.auto{
			background: rgba(255, 255, 255, 0.89);
			box-shadow: 0px 4rpx 68rpx 0px rgba(39, 52, 125, 0.25);
			border-radius: 24rpx;
            margin: 200rpx 50rpx;
			text-align: center;
			.image_name{
				width: 150rpx;
				height: 150rpx;
				margin-top: -50rpx;
			}
			.image_code{
				width: 400rpx;
				height: 400rpx;
				padding: 20rpx 0;
			}
			.name{
				font-size: 16px;
				font-weight: 600;
				padding: 20rpx;
			}
		}
	}

</style>
