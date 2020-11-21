<template>
	<view class="content">
		<view class="pay">
			<view class="pay_left">
				<!-- <image src="../../../static/img/index/weixinqianbao.png" mode=""></image> -->
				<text>提现到支付宝</text>
			</view>
			<view class="pay_right">
				<input type="text"v-model="telephone" placeholder="请输入支付账号" />
				<!-- <text @tap="change">更改</text> -->
			</view>
		</view>
		<view class="select">
			<view class="">
				<text>选择提现金额</text>
			</view>
			<view class="" style="font-size: 14px;color: #999;">
				<text>提现到支付宝</text>
			</view>
		</view>
		<!-- 选择金额卡片 -->
		<view class="card">
			<view :class="current==item.id?'card_li  active':'card_li'"  v-for="(item,index) in list" @tap='select_card(item)'>
				<view class="" style="font-weight: bold;font-size: 16px;">
					{{item.title}}元
				</view>
				<view class="">
					实际到账{{item.money}}.00元
				</view>
			</view>

		</view>
		<view class="text" style="color: #555555;font-size: 14px;padding: 20rpx;">
			提示：每笔金额收取2元手续费
		</view>
		<view class="bot" @tap='save'>
			提现
		</view>
	</view>
</template>

<script>
	import {Withdrawal} from '../../../api/Index/index.js'
	export default {
		data() {
			return {
				telephone: '',
				disabled: false,
				current:0,
				money:3,//提现的金额
				type:null,//提现类型
				list:[
					{
						id:0,
						title:5,
						money:3.00
					},
					{
						id:1,
						title:50,
						money:48.00
					},
					{
						id:2,
						title:100,
						money:98.00
					},
					{
						id:3,
						title:200,
						money:198.00
					},
					{
						id:4,
						title:500,
						money:498.00
					},
					{
						id:5,
						title:1000,
						money:998.00
					}
	
				],//提现金额
				
			}
		},
		/* 分享 */
		 onShareAppMessage(res){
			 
		 },
		onLoad(e) {
			this.type=e.type;
		},
		methods: {
			/* 更改 */
			change() {
				this.disabled = !this.disabled;
			},
			/* 卡片选择 */
			select_card(item){
				this.current=item.id;
				this.money=item.money;
			},
			/* 点击提现 */
			save(){
				Withdrawal({
					money:this.money,
					token:uni.getStorageSync('token'),
					type:this.type,
					AlipayAccount:this.telephone
				}).then(res=>{
					if(res.code==1){
						uni.showToast({
							title:res.msg,
							icon:'none',
							success: () => {
								uni.navigateBack({
									delta:1
								})
							}
						})
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
					// width: 20rpx;
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
		.bot{
			width: 500rpx;
			height: 80rpx;
			line-height: 80rpx;
			background: linear-gradient(87deg, #FFA25D, #FF4A16);
			box-shadow: -1px 2px 5px 0px rgba(250, 95, 62, 0.6);
			border-radius: 38rpx;
			color: #FFFFFF;
			text-align: center;
			margin: 100rpx auto;

		}
	}
</style>
