<template>
	<view class="content">
		<view class="pay">
			<view class="pay_left">
				<image src="../../../static/img/index/weixinqianbao.png" mode=""></image>
				<text>提现到微信</text>
			</view>
			<view class="pay_right">
				<input type="text" :value="telephone" :disabled="disabled?false:true" />
				<text @tap="change">更改</text>
			</view>
		</view>
		<view class="select">
			<view class="">
				<text>选择提现金额</text>
			</view>
			<view class="" style="font-size: 14px;color: #999;">
				<text>提现至微信钱包</text>
			</view>
		</view>
		<!-- 选择金额卡片 -->
		<view class="card">
			<view :class="current==index?'card_li  active':'card_li'"  v-for="(item,index) in 6" @tap='select_card(index)'>
				<view class="" style="font-weight: bold;font-size: 16px;">
					5元
				</view>
				<view class="">
					实际到账3.00元
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				telephone: '1476071626',
				disabled: false,
				current:0,
			}
		},
		methods: {
			/* 更改 */
			change() {
				this.disabled = !this.disabled;
			},
			/* 卡片选择 */
			select_card(index){
				this.current=index;
			},
		}
	}
</script>

<style lang="scss">
	.content {
		.pay {
			border-top: 1px solid #eee;
			border-bottom: 1px solid #eee;
			margin-top: 20rpx;
			padding: 30rpx 20rpx;
			display: flex;
			justify-content: space-between;

			.pay_left {
				display: flex;
				align-items: center;
				font-size: 15px;
				color: #333;

				image {
					width: 40rpx;
					height: 35rpx;
					padding-right: 10rpx;
				}
			}

			.pay_right {
				display: flex;
				align-items: center;
				font-size: 15px;

				input {
					width: 180rpx;
				}

				text {
					color: #FA5F3E;
				}

			}
		}

		.select {
			margin-top: 20rpx;
			padding: 0 20rpx;
			display: flex;
			justify-content: space-between;
			color: #444444;
		}

		.card {
			display: flex;
			flex-wrap: wrap;
			font-size: 13px;
			justify-content: center;
			margin-top: 20rpx;

			.card_li {
				width: 30%;
				border: 1px solid #eee;
				text-align: center;
				padding: 40rpx 0rpx;
				margin: 10rpx;
				border-radius: 20rpx;
			}

			.active {
				background-color: rgba(250, 95, 62, 0.2);
				color: #FF2700;
				border: 1px solid #FA5F3E;
				box-shadow: 0px 0px 16px 0px rgba(250, 95, 62, 0.2);
			}
		}
	}
</style>
