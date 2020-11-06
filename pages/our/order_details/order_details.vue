<template>
	<view class="content">
		<!-- 搜索条 -->
		<view class="search_bg">
			<view class="search" @tap="search">
				<image src="../../../static/img/our/store/search.png" mode=""></image>
				<input type="text" :value="search_text" />
			</view>
			<view class="text" @tap='open'>
				筛选<image src="../../../static/img/our/shaixuan.png" mode=""></image>
			</view>
		</view>
		<!-- 订单列表 -->
		<view class="list">
			<view class="li">
				<view class="top">
					<view class="">
						2020-5-28
					</view>
					<view class="">
						消费订单
					</view>
				</view>
				<view class="fot">
					<view class="left">
						<text>用户id：</text>小仙女
					</view>
					<view class="right">
						+100
					</view>
				</view>
			</view>
		</view>
		<!-- 筛选弹框 -->
		<uni-popup ref="popup" type="top" :maskClick='true'>
			<view class="popup" :style="'height:'+height+'px'">
				<view class="top">
					筛选
				</view>
				<!-- 筛选条件 -->
				<view class="time">
					<text>时间</text>
					<image src="../../../static/img/our/store/dowm.png" mode=""></image>
				</view>
				<view class="time_list">
					<view :class="time_current==index?'time_li active':'time_li' " v-for="(item,index) in 4"  @tap='time(index)'>
						月
					</view>
				</view>
				<!-- 筛选条件 -->
				<view class="time">
					<text>明细</text>
					<image src="../../../static/img/our/store/dowm.png" mode=""></image>
				</view>
				<view class="time_list">
					<view :class="small_current==index?'time_li active':'time_li' "  v-for="(item,index) in 4" @tap='small(index)'>
						充值明细
					</view>
				</view>
				<!-- 确定按钮 -->
				<view class="bot">
					确定
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		data() {
			return {
				search_text: '', //搜索的类容
				height: null, //页面的高度
				time_current:null,//时间的选择
				small_current:null,//明细的选择
			}
		},
		onLoad() {
			try {
				const res = uni.getSystemInfoSync();
				this.height = res.windowHeight;
				console.log(res.windowHeight);
			} catch (e) {
				// error
			}
		},
		methods: {
			/* 弹窗筛选 */
			open() {
				this.$refs.popup.open()
			},
			/* 时间的选择 */
			time(index){
				this.time_current=index;
			},
			/* 明细 */
			small(index){
				this.small_current=index;
			}
		},
		components: {
			uniPopup
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f1f1f1;
	}

	.content {
		.search_bg {
			background-color: #fff;
			padding: 20rpx;
			display: flex;
			justify-content: space-between;
		}

		.search {
			background-color: #F4F4F4;
			border-radius: 30rpx;
			margin: 0 20rpx;
			display: flex;
			align-items: center;
			width: 80%;

			image {
				width: 40rpx;
				height: 40rpx;
				line-height: 40rpx;
				margin-left: 20rpx;
				padding: 10rpx;
			}
		}

		.text {
			display: flex;
			align-items: center;
			font-size: 14px;

			image {
				width: 30rpx;
				height: 30rpx;
			}
		}

		.list {
			.li {
				background-color: #FFFFFF;
				border-radius: 20rpx;
				margin: 20rpx;

				.top {
					font-size: 14px;
					color: #d6d6d6;
					padding: 20rpx;
					border-bottom: 1px solid #eee;
					display: flex;
					justify-content: space-between;
				}

				.fot {
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: 16px;
					padding: 20rpx;
					color: #3a3a3a;

					.right {
						color: #FA5F3E;
					}
				}
			}
		}

		/* 筛选弹框 */
		.popup {
			background-color: #fff;
			width: 70%;
			height: 600rpx;
			position: fixed;
			right: 0;

			.top {
				padding: 30rpx 20rpx;
				background-color: #f8f8f8;
				font-size: 14px;
			}

			.time {
				display: flex;
				justify-content: space-between;
				padding: 20rpx;
				font-size: 14px;

				image {
					width: 20rpx;
					height: 15rpx;
				}
			}

			.time_list {
				display: flex;

				flex-wrap: wrap;

				.time_li {
					font-size: 14px;
					background-color: #f8f8f8;
					color: #555555;
					border-radius: 20rpx;
					width: 33%;
					padding: 20rpx 0;
					text-align: center;
					margin: 10rpx;
				}
				.active{
					background-color: #FA5F3E;
					color: #FFFFFF;
				}
			}
			.bot{
				width: 300rpx;
				height: 76rpx;
				background: linear-gradient(87deg, #FFA25D, #FF4A16);
				box-shadow: -1px 2px 5px 0px rgba(250, 95, 62, 0.6);
				border-radius: 38px;
				margin: 300rpx auto;
				color: #FFFFFF;
				text-align: center;
				line-height: 76rpx;
			}
		}
	}
</style>
