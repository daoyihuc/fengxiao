<template>
	<view class="content">
		<!-- 	<view class="title_top">
			<view class="left">
				<image :src="data.StoreInfo.logo" mode=""></image>
			</view>
			<view class="right">
				<view class="img_li">
					<image src="../../../static/img/index/dianpu.png" mode=""></image>
				     <text>{{data.StoreInfo.store_name}}</text>
				</view>
				<view class="img_li">
					<image src="../../../static/img/index/dizhi.png" mode=""></image>
				     <text>
					{{data.StoreInfo.province}}{{data.StoreInfo.city}}{{data.StoreInfo.district}}{{data.StoreInfo.address}}
					 </text>
				</view>
				<view class="text_small">
					<view class="small_left">
						充值余额：<text>{{data.ResidualIntegral}}</text>
					</view>
					<view class="small_left">
						总消费：<text>{{data.ConsumptionPoints}}</text>
					</view>
					<view class="small_left">
						共享{{data.ProfitNumber}}份门店分润
					</view>
				</view>
				<view class="text_smalls">
					<view class="small_left">
						距离返现相差金额：
					</view>
					<view class="small_left">
						<text>{{data.ThreeTotalOtherMoney}}</text>
					</view>
				</view>
				<view class="text_smalls">
					<view class="small_left">
						失效金额(三个月内)：
					</view>
					<view class="small_left">
						<text>{{data.InvalidAmount}}</text>
					</view>
				</view>
				
			</view>
		</view> -->
		<!-- 修改样式 -->
		<view class="new_bg">
			<image :src="data.StoreInfo.logo" mode=""></image>
			<view class="new_card">
				<view class="img_li" style="margin-top: 0rpx;">
					<image src="../../../static/img/index/dianpu.png" mode=""></image>
					<text style="padding-left: 15rpx;">{{data.StoreInfo.store_name}}</text>
				</view>
				<view class="img_li">
					<image src="../../../static/img/index/dizhi.png" mode=""></image>
					<text style="padding-left: 15rpx;">
						{{data.StoreInfo.province}}{{data.StoreInfo.city}}{{data.StoreInfo.district}}{{data.StoreInfo.address}}
					</text>
				</view>
				<view class="three_text">
					<view class="left">
						充值余额：<text style="color: #FA5F3E;">{{data.ResidualIntegral}}</text>
					</view>
					<view class="left">
						总消费：<text style="color: #FA5F3E;">{{data.ConsumptionPoints}}</text>
					</view> 
					<view class="right">
					共享{{data.ProfitNumber}}分参与
				</view>
			</view>
			<view class="li_money">
				<view class="small_left">
					距离返现相差金额：
				</view>
				<view class="small_left">
					<text style="color: #FA5F3E;">{{data.ThreeTotalOtherMoney}}</text>
				</view>
			</view>
			<view class="li_money">
				<view class="small_left">
					失效金额(三个月内)：
				</view>
				<view class="small_left">
					<text style="color: #FA5F3E;">{{data.InvalidAmount}}</text>
				</view>
			</view>
			<view class="li_money">
				<view class="small_left">
					失效时间（三个月内）：
				</view>
				<view class="small_left">
					<text style="color: #FA5F3E;">{{data.invalid_endtime}}</text>
				</view>
			</view>
					
		
		
		</view>
	</view>

	<!--  -->
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
	<view class="withdrawalrecord">
		<view v-for="(item, index) in logList" :key="index" class="record_list">
			<view class="left">
				<view class="title">{{item.title}}</view>
				<view class="time">订单号：{{item.order_sn}}</view>
				<view class="time">{{item.time}}</view>
			</view>
			<view class="right">
				<view>{{item.money}}</view>
				<view class="time">{{item.statust==0?'待审核':item.statust==1?'审核成功':item.statust==2?'审核失败':''}}</view>
			</view>
		</view>
		<!-- <view class="nodata" v-if="logList.length >= 6">—— 到底啦 ——</view> -->
	</view>
	<nodata :colors="colors" title="暂无明细" v-if="logList.length == 0"></nodata>
	</view>
</template>

<script>
	import loading from "../../../components/public/loading.vue";
	import Lists from "../../../components/Lists/Lists.vue";
	/* 接口 */
	import {
		ConsumptionDetails
	} from "../../../api/Index/index.js"
	export default {
		data() {
			return {
				logList: [],
				isShow: true,
				StoreId: null, //门店ID
				Page: 1, //页面
				list: [], //类别
				data: {},
			}
		},
		onLoad(e) {
			this.StoreId = e.id;
			this.getdata();
		},
		onReachBottom() {
			this.Page++;
			this.list = [];
			this.getdata();
		},
		/* 分享 */
		onShareAppMessage(res) {

		},
		methods: {
			/* 获取页面数据 */
			getdata() {
				ConsumptionDetails({
					StoreId: this.StoreId,
					Page: this.Page,
					token: uni.getStorageSync('token')
				}).then(res => {
					if (res.code == 1) {
						this.isShow = false;
						this.data = res.data;
						this.list = res.data.OrderList.List;
						var arr = [];
						for (var i in this.list) {
							var json = {};
							json.time = this.list[i].dateline;
							json.title = this.list[i].StoreName;
							json.money = this.list[i].amount;
							json.order_sn = this.list[i].order_sn;
							json.statust = 3;
							arr.push(json);
						}
						this.logList = [...this.logList, ...arr];
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
			Lists
		}
	}
</script>

<style lang="scss">

	.content {
		
		.title_top {
			display: flex;
			// justify-content: space-between;
			padding: 20rpx;
			border-top: 1px solid #eee;
			color: #4d4d47;
			border-bottom: 4px solid #fafaf9;

			image {
				width: 330rpx;
				height: 450rpx;
			}

			.right {
				padding-left: 50rpx;

				.img_li {
					width: 330rpx;
					font-size: 15px;
					padding-top: 20rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
					display: flex;

					image {
						width: 30rpx;
						height: 30rpx;
						padding: 5rpx;
					}

					text {
						// padding-left: 15rpx;
					}
				}

				.text_small {
					display: flex;
					font-size: 12px;
					justify-content: space-between;
					padding: 20rpx 0rpx;
					border-bottom: 1px solid #f1f1f1;

					text {
						color: rgba(250, 95, 62, .9);
					}
				}

				.text_smalls {
					display: flex;
					font-size: 12px;
					justify-content: space-between;
					padding: 15rpx 0;
					border-bottom: 1px solid #f1f1f1;

					text {
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
			padding: 50rpx 30rpx;
			margin-top: 350rpx;
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

		/* 新修改样式 */
		.new_bg {

			image {
				width: 100%;
				position: relative;
			}

			.new_card {
				position: absolute;
				background-color: #FFFFFF;
				width: 100%;
				top: 400rpx;
				border-radius: 30rpx 30rpx 0 0;
				border-bottom: 6px solid #EEEEEE;
			}

			.img_li {
				padding: 10rpx 20rpx;
				font-size: 14px;
				color: #333333;
				display: flex;
				align-items: center;

				image {
					width: 30rpx;
					height: 30rpx;
					padding: 5rpx;
				}
			}

			.three_text {
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				padding: 20rpx;

				.left {
					font-weight: 600;
				}
			}

			.li_money {
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				color: #3B4144;
				padding: 20rpx;
			}
		}
	}
</style>
