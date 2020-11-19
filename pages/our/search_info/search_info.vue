<template>
	<view class="content">
		<view class="info" v-for="(item,index) in list">
			<view class="left">
				<image src="../../../static/img/our/store/beinjing.png" mode=""></image>
			</view>
			<view class="right">
				<view class="top">
					<text>{{item.nickname}}</text>
					<text class="text">剩余：{{item.recharge_money}}</text>
					<text class="text">总消费：{{item.ResidualIntegral}}</text>
				</view>
				<view class="fot">
					<text>已消费(3个月内)：<text style="color: #FA5F3E;">{{item.ThreeTotalMoney}}</text></text>
					<text style="padding-left: 15rpx;">距返现相差金额：<text style="color: #FA5F3E;">{{item.ThreeTotalOtherMoney}}</text></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {StoreSearch} from '../../../api/our/our.js'
	export default {
		data() {
			return {
				Mobile:'',//电话
				Page:1,
				list:[],//数据列表
			}
		},
		/* 分享 */
		 onShareAppMessage(res){
			 
		 },
		onLoad(e) {
			this.Mobile=e.Mobile;
			this.getdata();
		},
		onReachBottom() {
			this.Page++;
			this.getdata();
		},
		methods: {
			/* 获取接口 */
			getdata(){
				StoreSearch({
					token:uni.getStorageSync('token'),
					Page:this.Page,
					Mobile:this.Mobile
				}).then(res=>{
					if(res.code==1){
						this.list=[...this.list,...res.data.List];
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
	.content{
		.info{
			display: flex;
			align-items: center;
			padding: 20rpx;
			border-top: 1px solid #EEEEEE;
			border-bottom: 1px solid #EEEEEE;
			.left{
				image{
				    width: 120rpx;
					height: 120rpx;
					border-radius: 50%;
				}
			}
			.right{
				padding: 0 10rpx;
				.top{
					font-size: 14px;
					.text{
						color: #FA5F3E;
						border: 1px solid #FA5F3E;
						border-radius: 20rpx;
						padding:0 10rpx;
						margin: 0 15rpx;
						font-size: 12px;
					}
				}
				.fot{
					padding-top: 10rpx;
					font-size: 12px;
				}
			}
		}
	}

</style>
