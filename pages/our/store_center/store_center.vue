<template>
	<view class="content">
		<view class="list">
			<view class="li">
				<view class="left">
					头像
				</view>
				<view class="right">
					<image class="img" src="../../../static/img/index/erweima.png" mode=""></image>
					<image class="jiantou" src="../../../static/img/our/jiantou.png" mode=""></image>
				</view>
			</view>
			<view class="li">
				<view class="left">
					门店名称
				</view>
				<view class="right">
					张张的店
				</view>
			</view>
			<view class="li">
				<view class="left">
					门店地址
				</view>
				<view class="right">
					湖南省长沙市开福区万达广场
				</view>
			</view>
			<view class="li">
				<view class="left">
					门店电话
				</view>
				<view class="right">
					14760716326
				</view>
			</view>
			<view class="lis">
				<view class="left">
					门店电话
				</view>
				<view class="right">
					门店描述门店描述
					门店描述门店描述
					门店描述门店描述
					门店描述门店描述
				</view>
			</view>

		</view>



		<!-- 底部导航 -->
		<view class="fot">
			<view class="right" @tap='my_store'>
				<image src="../../../static/img/our/store/store.png" mode=""></image>
				<view>我的店铺</view>
			</view>
			<view class="center" @tap='saoyisao'>
				<image src="../../../static/img/our/store/saoyisao.png" mode=""></image>
				<view>扫一扫</view>
			</view>
			<view class="right" @tap='store_center'>
				<image src="../../../static/img/our/store/mendian.png" mode=""></image>
				<view style="color: #FA5F3E;">门店中心</view>
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
			/* 跳转回去 */
			my_store(){
				uni.navigateTo({
					url:'../My_store/My_store'
				})
			},
			/* 扫一扫 */
			saoyisao(){
				// 允许从相机和相册扫码
				uni.scanCode({
				    success: function (res) {
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
				    }
				});
			},

		}
	}
</script>

<style lang="scss">
	.content {
		.list {
			.li {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 20rpx;
				border-top: 1px solid #eee;
				height: 80rpx;
				.right {
					font-size: 14px;
					display: flex;
					align-items: center;
					color: #cecece;
					.img {
						width: 100rpx;
						height: 100rpx;
					}
					.jiantou {
						width: 18rpx;
						height: 25rpx;
						padding-left: 20rpx;
					}
				}
			}
			.lis{
				border-top: 1px solid #eee;
				padding: 20rpx;
				.right{
					font-size: 14px;
					color: #cecece;
					padding-top: 20rpx;
				}
			}
		}

		/* 底部菜单 */
		.fot {
			width: 100%;
			display: flex;
			justify-content: space-around;
			position: fixed;
			font-size: 12px;
			text-align: center;
			color: #6d6d6d;
			bottom: 0;
			padding: 20rpx 0;
			box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.07);

			.right {
				image {
					width: 50rpx;
					height: 50rpx;
				}

				view {
					padding-top: 5px;
				}
			}

			.center {
				margin-top: -30px;

				image {
					width: 100rpx;
					height: 100rpx;
				}

				view {
					padding-top: 5px;
				}
			}

		}

	}
</style>
