<template>
	<view class="content">
		<view class="top_img" :style="'background:url('+data.images+');background-repeat: no-repeat;background-size: 100% 100%;'">
			<image src="../../../static/img/store/left.png" mode="" @tap="black"></image>
			<text>门店</text>
		</view>
		<!-- 店面 -->
		<view class="store">
			<view class="left">
				<view class="store_name">
					{{data.store_name}}
				</view>
				<view class="text_li">
					{{data.province}}{{data.city}}{{data.district}}{{data.address}}
				</view>
				<view class="text_li">
					联系电话：{{data.mobile}}
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
		<view class="info" v-html="data.desc">
			{{data.desc}}
		</view>

		<!-- 页面加载 -->
		<loading v-if="isShow == true"></loading>
	</view>
</template>

<script>
	import loading from "../../../components/public/loading.vue";
	import { StoreDetail } from '../../../api/store/store.js'
	export default {
		data() {
			return {
				isShow: true,
				id:null,//门店id
				data:{},//所有数据
			}
		},
		/* 分享 */
		 onShareAppMessage(res){
			 
		 },
		onLoad(options) {
			if (options.scene) {
				let scene = decodeURIComponent(options.scene);
				this.id=scene;
				// setTimeout(()=>{
				//     uni.showToast({
				//     	title:scene
				//     })
				// },2000);
				// }else{
				//    uni.showToast({
				//    	title:"0"
				//    })
				// }
			}else{
				this.id=options.id;
			}
			
			this.getdata();
		},
		methods: {
			/* 分享 */
			share() {
				uni.navigateTo({
					url: '../store_share/store_share?id='+this.id
				})
			},
			/* 返回 */
			black() {
				uni.navigateBack({
					delta: 1
				})
			},
			/* 获取门店详情信息 */
			getdata(){
				StoreDetail({
					token:uni.getStorageSync('token'),
					StoreId:this.id
				}).then(res=>{
					if(res.code==1){
						this.data=res.data;
						this.isShow = false;
					}else{
						uni.showToast({
							title:res.msg,
							icon:"none",
							success: () => {
								/* 登录过期token=0 */
								uni.setStorageSync('token','0');
								uni.switchTab({
									url:'../../our/our'
								})
							}
						})
					}
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
			// background: url(https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=339984553,3509384023&fm=26&gp=0.jpg) no-repeat;
			
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
