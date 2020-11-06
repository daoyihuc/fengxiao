<template>
	<view class="content">
		<!-- 卡片 -->
		<view class="top_card">
			<view class="top">
				<view class="left">
					<view class="text">
						我的积分
					</view>
					<view class="img_money">
						<image src="../../static/img/promotion/jifen.png" mode=""></image>
						<text>15580.00</text>
					</view>
				</view>
				<view class="right" @tap='Withdrawal'>
					立即提现
				</view>
			</view>
			<view class="row">

			</view>
			<view class="fot">
				<view class="left">
					<text>累计已获得</text>
					<text>15000.00</text>
				</view>
				<view class="right" @tap='Recurrence'>
					提现记录
					<image src="../../static/right.png" mode=""></image>
				</view>
			</view>
		</view>
		<!-- tab卡片 -->
		<view class="tab_card">
			<view class="tab_card_list">
				<view class="tab_li" v-for="(item,index) in tab_list" @tap='tap_car_url(item)'>
					<image :src="item.image" mode=""></image>
					<view class="text">
						{{item.text}}
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tab_list:[
					{
						image:'../../static/img/promotion/jifen(1).png',
						text:'积分中心',
						url:'Integral_center/Integral_center'
					},
					{
						image:'../../static/img/promotion/tuiguanghaibao.png',
						text:'推广海报',
						url:'Poster/Poster'
					},
					{
						image:'../../static/img/promotion/guize.png',
						text:'推广规则',
						url:'Promotion_rules/Promotion_rules'
					},
					{
						image:'../../static/img/promotion/tuiguang.png',
						text:'推广记录',
						url:'record/record'
					}
				],

			}
		},
		methods: {
			/* 提现 */
			Withdrawal(){
				uni.navigateTo({
					url:'../index/Withdrawal/Withdrawal'
				})
			},
			/* 提现记录 */
			Recurrence(){
				uni.navigateTo({
					url:'../index/Recurrence/Recurrence'
				})
			},
			/* 小卡片跳转 */
			tap_car_url(item){
				uni.navigateTo({
					url:item.url
				})
			},

		}
	}
</script>

<style lang="scss">
	.content {
		.top_card {
			margin: auto;
			width: 95%;
			// height: 500rpx;
			background: linear-gradient(72deg, #ff4810, #FD7239);
			// background: url(../../static/img/promotion/beij1.png);
			box-shadow: -1px 2px 5px 0px rgba(250, 127, 69, 0.6);
			color: #FFFFFF;
			border-radius: 20rpx;

			.top {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.left {
					font-size: 14px;
					padding: 50rpx 20rpx 10rpx 50rpx;

					image {
						width: 50rpx;
						height: 50rpx;
						padding-right: 10rpx;
					}

					.img_money {
						display: flex;
						align-items: center;
						font-size: 30px;
						padding: 20rpx 0;
					}

				}

				.right {
					color: #FA5F3E;
					background-color: #FFFFFF;
					height: 50rpx;
					font-size: 15px;
					text-align: center;
					line-height: 50rpx;
					padding: 0 20rpx;
					border-radius: 25rpx 0 0 25rpx;
				}
			}

			.row {
				height: 1px;
				width: 80rpx;
				background-color: rgba(255, 255, 255, .8);
				margin-left: 60rpx;

			}

			.fot {
				padding: 50rpx 20rpx 20rpx 50rpx;
				font-size: 14px;
				display: flex;
				justify-content: space-between;
				align-items: center;

				image {
					width: 35rpx;
					height: 35rpx;
				}

				.right {
					align-items: center;
					display: flex;
				}
			}
		}

		/* tab卡片 */
		.tab_card {
			.tab_card_list {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				padding: 30rpx;

				.tab_li {
					padding:70rpx 0;
					width: 48%;
					background: #FFFFFF;
					box-shadow: 0px 0px 24px 0px rgba(217, 217, 217, 0.4);
					border-radius: 20rpx;
					font-size: 14px;
					text-align: center;
					margin-top: 20rpx;

					image {
						width: 80rpx;
						height: 90rpx;
					}
				}
			}
		}
	}
</style>
