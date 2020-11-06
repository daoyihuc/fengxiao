<template>
	<view class="content">
		<!-- 卡片 -->
		<view class="card">
			<view class="list">
				<view class="">
					已提现积分
				</view>
				<view class="number">
					15580.00
				</view>
			</view>
			<view class="row">
				
			</view>
			<view class="list">
				<view class="">
					当前积分
				</view>
				<view class="number">
					15580.00
				</view>
			</view>
			<view class="row">
				
			</view>
			<view class="list">
				<view class="">
					冻结积分
				</view>
				<view class="number">
					15580.00
				</view>
			</view>
		</view>
	   <!-- 近期消费-->
	   <view class="card_top">
	   	<view class="row">
	   	</view>
	   	<text>近期消费</text>
	   </view>
	   <!-- 列表-->
	   <loading v-if="isShow == true"></loading>
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
						money:'50',
						statust:'1'
					},
					{
						time:'2020-10-25',
						title:'开福区',
						money:'50',
						statust:'1'
					},
					{
						time:'2020-10-25',
						title:'万达',
						money:'50',
						statust:'1'
					}
				],
				isShow: true
			}
		},
		onLoad: function(options) {
			setTimeout(() => {
				this.isShow = false
			}, 600);
		},
		methods: {
			
		},
		components: {
			loading,
			Lists
		},
	}
</script>

<style lang="scss">
	.content{
		.card{
			display: flex;
			justify-content: space-around;
			align-items: center;
			background: linear-gradient(72deg, #ff4810, #FD7239);
			color: #FFFFFF;
			font-size: 12px;
			padding: 80rpx 10rpx;
			.row{
				height: 60rpx;
				width: 1px;
				background-color: #FFFFFF;
			}
			.list{
				text-align: center;
				view{
					padding: 5rpx 0;
				}
				.number{
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
