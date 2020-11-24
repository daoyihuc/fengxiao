<template>
	<view class="content">
		<!-- 卡片 -->
		<!--<view class="card">
			 <view class="list">
				<view class="">
					已提现积分
				</view>
				<view class="number">
					{{data.Embodied}}
				</view>
				<view class="row">

				</view>
				<view class="list">
					<view class="">
						当前积分
					</view>
					<view class="number">
						{{data.promotion_balance}}
					</view>
				</view>
				<view class="row">

				</view>
				<view class="list">
					<view class="">
						冻结积分
					</view>
					<view class="number">
						{{data.FrozenAmount}}
					</view>
				</view>
			</view>
		</view> -->
		<!-- 近期消费-->
		<view class="card_top">
			<view class="row">
			</view>
			<text>推广门店返利</text>
		</view>
		<!-- 列表-->
		<view class="withdrawalrecord">
	   	<view v-for="(item, index) in list" :key="index" class="record_list">
	   		<view class="left">
	   			<view class="title">{{item.store_name}}</view>
	   			<view class="time">{{item.dateline}}</view>
	   		</view>
	   		<view class="right">
	   			<view>{{item.money}}</view>
	   			<view class="time">{{item.status==0||item.status==1?'已冻结':''}}</view>
	   		</view>
	   	</view>
	   </view>
	   <view class="wait" v-if="list==0">
	   	<image src="../../../static/img/store/quesheng1.png" mode=""></image>
	        <view class="text" style="text-align: center;font-size: 14px; color: #808080;" >
	        	暂无数据
	        </view> 	
	   </view>

		<loading v-if="isShow == true"></loading>

	</view>
</template>

<script>
	import loading from "../../../components/public/loading.vue";
	/* 接口 */
	import {
		YuanbaoCenter
	} from '../../../api/Center/Center.js'
	export default {
		data() {
			return {
				isShow: true,
				data: {}, //所有数据
				list: [], //列表
				Page: 1, //页码
			}
		},
		/* 上拉刷新 */
		onReachBottom() {
			this.Page++;
		    this.getdata();
		},
		/* 分享 */
		 onShareAppMessage(res){
			 
		 },
		onLoad: function(options) {
			this.getdata();
		},
		methods: {
			/* 获取数据 */
			getdata() {
				YuanbaoCenter({
					Page: this.Page,
					token: uni.getStorageSync('token')
				}).then(res => {
					if (res.code == 1) {
						this.isShow = false;
						this.data = res.data.ScoreList;
						this.list = [...this.list, ...res.data.List];
					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
				})
			},
		},
		components: {
			loading,
		},
	}
</script>

<style lang="scss">

	.content {
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

		.card {
			
			background: linear-gradient(72deg, #ff4810, #FD7239);
			color: #FFFFFF;
			font-size: 12px;
			padding: 80rpx 10rpx;

			.row {
				height: 60rpx;
				width: 1px;
				background-color: #FFFFFF;
			}

			.list {
				text-align: center;
				display: flex;
				justify-content: space-around;
				align-items: center;

				view {
					padding: 5rpx 0;
				}

				.number {
					font-size: 16px;
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
			border-bottom: 1px solid #eee;

			.row {
				height: 20px;
				width: 2px;
				background-color: #FA5F3E;
			}

			text {
				padding-left: 20rpx;
			}
		}
	}
</style>
