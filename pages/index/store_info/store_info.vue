<template>
	<view class="content">
		<view class="title_top">
			<view class="left">
				<image src="../../../static/img/index/beijingh.png" mode=""></image>
			</view>
			<view class="right">
				<view class="img_li">
					<image src="../../../static/img/index/dianpu.png" mode=""></image>
				     <text>万家丽店</text>
				</view>
				<view class="img_li">
					<image src="../../../static/img/index/dizhi.png" mode=""></image>
				     <text>开福区万达国际总部c3栋1005开福区万达国际总部c3栋1005</text>
				</view>
				<view class="text_small">
					<view class="small_left">
						剩余：<text>2000</text>
					</view>
					<view class="small_left">
						总消费：<text>2000</text>
					</view>
				</view>
				<view class="text_smalls" v-for="(item,index) in 4">
					<view class="small_left">
						已消费(三个月内)：
					</view>
					<view class="small_left">
						<text>2000</text>
					</view>
				</view>
				
			</view>
		</view>
	<view class="card">
		<view class="card_top">
			<view class="row">
			</view>
			<text>近期消费</text>
		</view>
	</view>
	<!-- 加载动画 -->
	<loading v-if="isShow == true"></loading>
	<!-- 列表组件 -->
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
		onLoad() {
			setTimeout(() => {
				this.isShow = false
			}, 600);
		},
		methods: {
			
		},
		components:{
			loading,
			Lists
		}
	}
</script>

<style lang="scss">
	.content{
		.title_top{
			display: flex;
			justify-content: space-between;
			padding: 20rpx;
			border-top: 1px solid #eee;
			color: #4d4d47;
			border-bottom: 4px solid #fafaf9;
			image{
				width: 330rpx;
				height: 450rpx;
			}
			.right{
				padding-left: 10rpx;
				.img_li{
					font-size: 15px;
					padding-top: 20rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
					image{
						width: 30rpx;
						height: 30rpx;
					}
					text{
						padding-left: 15rpx;
					}
				}
				.text_small{
					display: flex;
					font-size: 12px;
					justify-content: space-between;
					padding: 20rpx 0; 
					border-bottom: 1px solid #f1f1f1;
					text{
						color: rgba(250, 95, 62, .9);
					}
				}
				.text_smalls{
					display: flex;
					font-size: 12px;
					justify-content: space-between;
					padding: 15rpx 0; 
					border-bottom: 1px solid #f1f1f1;
					text{
						color: rgba(250, 95, 62, .9);
					}
				}
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
		.withdrawalrecord {
			margin-top: 10upx;
		}
		
		.record_list {
			padding: 30upx 4%;
			background-color: #fff;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1upx solid #eee;
		}
		
		.record_list .title {
			font-size: 28upx;
			font-weight: bold;
			color: #333;
			line-height: 60upx;
			height: 60upx;
		}
		
		.record_list .time {
			font-size: 24upx;
			color: #7C7C7C;
		}
		
		.record_list .right {
			font-size: 36upx;
			font-family: Source Han Sans CN;
			font-weight: 500;
			color: #FF4643;
		}
		
		.nodata {
			color: #ccc;
			text-align: center;
			font-size: 24upx;
			margin-top: 20upx;
			margin-bottom: 20upx;
		}
	}

</style>
