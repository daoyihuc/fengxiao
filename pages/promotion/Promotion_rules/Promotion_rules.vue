<template>
	<view class="content">
	   <!--头部 -->
	   <view class="head">
		   <view :class="index==current?' left active':'left'" v-for="(item,index) in heard_list" @tap="select_active(index)">
		   	  {{item.text}}
		   </view>
	   </view>
	   <view class="img_bg">
	   	<image src="../../../static/beijing.png" mode=""></image>
	   </view>
	   <view class="card_top">
	   	<view class="row">
	   	</view>
	   	<text>列表</text>
	   </view>
	   <!-- 列表-->
	   <view class="withdrawalrecord">
	   	<view v-for="(item, index) in logList" :key="index" class="record_list">
	   		<view class="left">
				<image :src="item.avatar" mode=""></image>
	   			<view class="title" style="padding-left: 20rpx;">{{item.nickname}}</view>
	   			
	   		</view>
	   		<view class="right">
	   			<view>{{item.createtime}}</view>
	   		</view>
	   	</view>
	   	<view class="nodata" v-if="logList.length==0">—— 暂无数据 ——</view>
	   </view>
	   <nodata :colors="colors" title="暂无明细" v-if="logList.length == 0"></nodata>
	</view>
</template>

<script>
	import {PromotionStatistics} from '../../../api/Center/Center.js'
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
					],
					page:1,//页码
			}
		},
		/* 分享 */
		 onShareAppMessage(res){
			 
		 },
		 onLoad() {
		 	this.getdata();
		 },
		 onReachBottom() {
		 	this.page++;
			this.getdata();
		 },
		methods: {
			/* 点击条件样式选择 */
			select_active(index){
				this.logList=[];
				this.page=1;
				this.current=index;
				this.getdata();
			},
			/* 获取数据 */
			getdata(){
				PromotionStatistics({
					token:uni.getStorageSync('token'),
					Page:this.page,
					type:this.current+1
				}).then(res=>{
				     if(res.code==1){
						this.logList=[...this.logList,...res.data.List];
					 }else{
						 uni.showToast({
						 	title:res.msg,
							icon:'none'
						 })
					 }
				})
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
				border-radius: 50%;
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
		 	font-size: 14px;
		 	font-family: Source Han Sans CN;
		 	font-weight: 500;
		 	color: #E5E5E5;
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
