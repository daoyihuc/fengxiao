<template>
	<view class="content">
	   <!--头部 -->
	   <view class="head">
		   <view :class="index==current?' left active':'left'" v-for="(item,index) in heard_list" @tap="select_active(index)">
		   	  {{item.text}}
		   </view>
	   </view>
	   <view class="img_bg">
	   	<image src="../../../static/img/index/beijingh.png" mode=""></image>
	   </view>
	   <view class="card_top">
	   	<view class="row">
	   	</view>
	   	<text>用户列表</text>
	   </view>
	   <!-- 列表-->
	   <view class="withdrawalrecord">
	   	<view v-for="(item, index) in logList" :key="index" class="record_list">
	   		<view class="left">
				<image :src="item.image" mode=""></image>
	   			<view class="title">{{item.title}}</view>
	   			
	   		</view>
	   		<view class="right">
	   			<view>{{item.money}}</view>
	   		</view>
	   	</view>
	   	<view class="nodata" v-if="logList.length >= 6">—— 到底啦 ——</view>
	   </view>
	   <nodata :colors="colors" title="暂无明细" v-if="logList.length == 0"></nodata>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current:0,//点击判断条件
				heard_list:[
					{
						text:'推广用户'
					},
					{
						text:'推广门店'
					},
					],
					logList: [
						{
							image:'../../../static/img/index/erweima.png',
							title:'提现',
							money:'50'
						},
						{
							image:'../../../static/img/index/erweima.png',
							title:'提现',
							money:'50'
						},
						{
							image:'../../../static/img/index/erweima.png',
							title:'提现',
							money:'50'
						}
					],
			}
		},
		/* 分享 */
		 onShareAppMessage(res){
			 
		 },
		methods: {
			/* 点击条件样式选择 */
			select_active(index){
				this.current=index;
			}
		}
	}
</script>

<style lang="scss">
	.content{
		.head{
			display: flex;
			justify-content: space-around;
			color: #acacac;
			.left{
				padding: 30rpx 0;
				font-size: 14px;
				
			}
			.active{
				color: #FA5F3E;
				border-bottom: 2px solid #FA5F3E;
			}

		}
		.img_bg{
			image{
				width: 100%;
				height: 500rpx;
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
		 
		 .record_list .left {
			 display: flex;
			 align-items: center;
		 	image{
				width: 100rpx;
				height: 100rpx;
				border: 50%;
				padding: 0 20rpx;
			}
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
