<template>
	<view class="content">
		<!-- 卡片 -->
		<view class="top_card">
			<view class="top">
				<view class="left">
					<view class="text">
						总积分
					</view>
					<view class="img_money">
						<image src="../../../static/img/promotion/jifen.png" mode=""></image>
						<text>{{our_data.MyPoints}}pv</text>
					</view>
				</view>
				<view class="right" @tap='Withdrawal'>
					立即提现
				</view>
			</view>
			<!-- <view class="row">

			</view> -->
			<view class="fot">
				<view class="left">
					<view>总冻结积分</view>
					<view>{{our_data.FrozenPoints}}pv</view>
				</view>
				<view class="rows">
					
				</view>
				<view class="left">
					<view>累计提现</view>
					<view>{{our_data.withdrawalMoney}}pv</view>
				</view>
			</view>
		</view>
		<view class="card_top">
			<view class="left">
				<view class="row">
				</view>
				<text>提现记录</text>
			</view>
		</view>
		<loading v-if="isShow == true"></loading>
		<Lists :logList="logList"></Lists>
		<view class="wait" v-if="logList.length==0">
			<image src="../../../static/img/store/quesheng1.png" mode=""></image>
		     <view class="text" style="text-align: center;font-size: 14px; color: #808080;" >
		     	暂无数据
		     </view>
				 	
		</view>
		
	</view>
</template>

<script>
	import loading from "../../../components/public/loading.vue";
	import Lists from "../../../components/Lists/Lists.vue";
	/* 接口 */
	import {WithdrawalList ,getinfot} from '../../../api/Index/index.js'
	export default {
		data() {
			return {
				logList: [],
				isShow: true,
				Page:1,//页码
				data:[],//所有数据
				our_data:{},//我的数据

			}
		},
		onLoad: function(options) {
			this.getdata();
			this.getdatas();
		},
		onReachBottom: function() {
			this.Page++;
			this.list=[];
			this.getdata();
		},
		methods: {
			/* 提现 */
			Withdrawal(){
				uni.navigateTo({
					url:'../../index/Withdrawal/Withdrawal?type=2'
				})
			},
			/* 提现记录 */
			Recurrence(){
				uni.navigateTo({
					url:'../index/Recurrence/Recurrence'
				})
			},
			
			/* 获取所有数据 */
			getdata(){
				WithdrawalList({
					Page:this.Page,
					token:uni.getStorageSync('token')
				}).then(res=>{
					if(res.code==1){
						this.data=res.data.List;
						this.isShow = false;
						var arr=[];
						for(var i in this.data){
							var json={};
							json.time=this.data[i].dateline;
							json.title='提现';
							json.money=this.data[i].money;
							json.statust=this.data[i].status;
							arr.push(json);
						}
						this.logList=[...this.logList,...arr];
					}
				})
			},
			getdatas() {
				getinfot({
					token: uni.getStorageSync('token')
				}).then((res) => {
					if (res.code == 1) {
						this.our_data= res.data;
					} 
					else {
						this.name='';
						this.log();
					}
				})
			}
		},
		components: {
			loading,
			Lists
		},
	}
</script>

<style lang="scss">
	.content {
		.card_top {
			padding: 20rpx 0;
			border-bottom: 1px solid #eee;
			.left{
				font-size: 16px;
				color: #333333;
				display: flex;
				margin-top: -20rpx;
				align-items: center;
				font-weight: bold;
				padding:50rpx;
			}
			.right{
				display: flex;
				align-items: center;
				font-size: 14px;
				color: #d1d1d1;
				image {
					width: 30rpx;
					height: 30rpx;
				}
				
			}
			display: flex;
			align-items: center;
			justify-content: space-between;
			// padding: 30rpx;
		
			.row {
				height: 20px;
				width: 2px;
				background-color: #FA5F3E;
			}
		
			text {
				padding-left: 20rpx;
			}
		}
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
				align-items: center;
				text-align: center;
				.rows{
					width: 1px;
					height: 50rpx;
					background-color: #efefef;
					margin: 0 50rpx;
				}
				view{
					padding: 5rpx 0;
				}

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
	
	}
</style>
