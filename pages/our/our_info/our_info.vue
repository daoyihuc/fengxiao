<template>
	<view class="content">
		<view class="li">
			<view class="li_left">
				头像
			</view>
			<view class="li_right">
				<view class="">
					<image class="img" :src="image" mode="" @tap='select_img'></image>
				</view>
				<view class="">
					<image class="jian" src="../../../static/img/our/jiantou.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="li">
			<view class="li_left">
				ID号
			</view>
			<view class="li_right">
				小仙女
			</view>
		</view>
		<view class="li">
			<view class="li_left">
				性别
			</view>
			<view class="li_right">
				女
			</view>
		</view>
		<view class="li">
			<view class="li_left">
				手机号
			</view>
			<view class="li_right">
				1476071006
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				image:'../../../static/img/index/erweima.png',//头像
			}
		},
		methods: {
			/* 跟换头像 */
			select_img(){

					uni.chooseImage({
						count: 1, //默认9
						sizeType: ['original'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album'], //从相册选择
						success: (res) => {
							this.image = res.tempFilePaths[0];
							uni.getFileSystemManager().readFile({
								filePath: this.image,
								encoding: 'base64',
								success: r => { // r.data 
									this.image = 'data:image/jpeg;base64,'+r.data;
								}
							})
						},
					});
				},
			
		}
	}
</script>

<style lang="scss">
	.content{
		.li{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding:10rpx 30rpx;
			border-bottom: 1px solid #f4f4f4;
			height: 100rpx;
			.img{
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
			}
			.jian{
				width: 15rpx;
				height: 20rpx;
				padding-left: 20rpx;
			}
			.li_right{
				display: flex;
				align-items: center;
				color: #a5a5a5;
			}
		}
	}

</style>
