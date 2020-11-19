<template>
	<view class="content">
		<view class="list">
			<view class="li">
				<view class="left">
					头像
				</view>
				<view class="right">
					<image class="img" :src="data.logo" mode=""></image>
					<image class="jiantou" src="../../../static/img/our/jiantou.png" mode=""></image>
				</view>
			</view>
			<view class="li">
				<view class="left">
					门店名称
				</view>
				<view class="right">
					{{data.store_name}}
				</view>
			</view>
			<view class="li">
				<view class="left">
					门店地址
				</view>
				<view class="right">
					{{data.province}}{{data.city}}{{data.district}}{{data.address}}
				</view>
			</view>
			<view class="li">
				<view class="left">
					门店电话
				</view>
				<view class="right">
					{{data.mobile}}
				</view>
			</view>
			<view class="lis">
				<view class="left">
					门店电话
				</view>
				<view class="right">
					{{data.desc}}
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
		<!-- 页面加载 -->
		<loading v-if="isShow == true"></loading>
	</view>
</template>

<script>
	import loading from "../../../components/public/loading.vue";
	import {StoreInfo} from '../../../api/our/our.js'
	export default {
		data() {
			return {
				data:{},//页面数据
			    isShow: true,

			}
		},
		onLoad() {
			this.getdata();
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
			/* 页面数据获取 */
			getdata(){
				StoreInfo({
					token:uni.getStorageSync('token')
				}).then(res=>{
					if(res.code==1){
						this.data=res.data;
						this.isShow = false;
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
					}
				})
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
