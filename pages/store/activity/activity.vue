<template>
	<view class="content">
		<view class="top_img" :style="'background: url('+data.img+');background-size: 100% 100%;background-repeat: no-repeat;'">
			<image src="../../../static/img/store/left.png" mode="" @tap="black"></image>
			<text>推广活动</text>
		</view>
		<!-- 店面 -->
		
		<view class="card_top">
			<view class="row">
			</view>
			<text>活动简介</text>
		</view>
		<view class="info" v-html="data.desc">
		</view>

		<!-- 页面加载 -->
		<loading v-if="isShow == true"></loading>
	</view>
</template>

<script>
	import loading from "../../../components/public/loading.vue";
	import {PromotionActivity} from '../../../api/store/store.js'
	export default {
		data() {
			return {
				isShow: true,
				data:{},//所有数据
			}
		},
		onLoad() {
			this.getdata();
		},
		/* 分享 */
		 onShareAppMessage(res){
			 
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
			/* 获取数据 */
			getdata(){
				PromotionActivity({}).then(res=>{
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
			}

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
			// background-size: 100% 100%;
			// background-repeat: no-repeat;
			display: flex;
			padding: 50rpx 0;
			font-size: 20px;
			color: #FFFFFF;

			text {
				text-align: center;
				margin-left: 30%;
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
			background-color: #FFFFFF;
			border-radius: 50rpx 50rpx 0 0;
			margin-top: -40rpx;
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
