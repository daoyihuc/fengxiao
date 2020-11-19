<template>
	<view class="content">
		<!-- 搜索条 -->
		<view class="search" @tap="search">
			<text>{{text}}</text>
		</view>
		<view class="search_card" v-if="show==1">
			<view class="search_card_li" v-for="(item,index) in search_card_list" @tap="show_select(item)">
				{{item.title}}
			</view>
		</view>
		<view class="color_list">
			<view class="color_li" v-for="(item,index) in color_list" :style="'background:'+item.color+';'">
				<view class="">
					{{item.money}}
				</view>
				<view class="" style="font-size: 12px;padding-top: 5rpx;">
					{{item.text}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {BusinessData} from '../../../api/our/our.js'
	export default {
		data() {
			return {
				search_card_list: [{
						id: 1,
						title: "全部"
					},
					{
						id: 2,
						title: "本周"
					},
					{
						id: 3,
						title: "本月"
					},
					{
						id: 4,
						title: "本季"
					}
				],
				/* 颜色列表 */
				color_list: [
					{
						color: 'linear-gradient(87deg, #FFA25D, #FC6E45)',
						money: '0',
						text: '总消费金额'
					},
					{
						color: 'linear-gradient(-30deg, #46AEF7, #1DD5E6)',
						money: '0',
						text: '未消费金额'
					},
					{
						color: 'linear-gradient(-30deg, #F78A9E, #FE988B)',
						money: '0',
						text: '总充值金额'
					},
					{
						color: 'linear-gradient(-30deg, #F78A9E, #FE988B)',
						money: '0',
						text: '总消费订单'
					},
					{
						color: 'linear-gradient(-30deg, #46AEF7, #1DD5E6)',
						money: '5560',
						text: '总充值订单'
					},
					{
						color: 'linear-gradient(87deg, #FFA25D, #FC6E45)',
						money: '0',
						text: '总会员数'
					}
				],
				show: 0, //判断是否显示
				text: '全部', //筛选的条件
				type:1,//筛选条件

			}
		},
		onLoad() {
			this.getdata();
		},
		/* 分享 */
		 onShareAppMessage(res){
			 
		 },
		methods: {
			/* 显示选择的条件 */
			search() {
				this.show = 1;
			},
			/* 点击筛选条件 */
			show_select(item) {
				this.show = 0;
				this.text = item.title;
				this.type=item.id;
				this.getdata();
			},
			/* 获取数据 */
			getdata(){
				BusinessData({
					token:uni.getStorageSync('token'),
					type:this.type
				}).then(res=>{
					if(res.code==1){
						this.color_list[0].money=res.data.TotalBuyMoney;
						this.color_list[1].money=res.data.TotalNextMoney;
						this.color_list[2].money=res.data.TotalRechargeMoney;
						this.color_list[3].money=res.data.TotalRechargeNum;
						this.color_list[4].money=res.data.TotalOrderNum;
						this.color_list[5].money=res.data.TotalUserNum;
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
	.content {
		.search {
			background-color: #F4F4F4;
			border-radius: 30rpx;
			margin: 0 20rpx;
			display: flex;
			align-items: center;

			text {
				margin-left: 20rpx;
				padding: 10rpx;
				color: #a6a6a6;
				font-size: 14px;
			}
		}

		.search_card {
			background-color: #F4F4F4;
			margin: 10rpx 30rpx;

			.search_card_li {
				font-size: 14px;
				padding: 10rpx;
			}
		}

		.color_list {
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;

			.color_li {
				width: 30%;
				color: #fff;
				// background: linear-gradient(87deg, #FFA25D, #FC6E45);
				box-shadow: -1px 2px 7px 0px rgba(0, 0, 0, 0.1);
				border-radius: 20rpx;
				text-align: center;
				padding: 40rpx 0;
				margin: 20rpx 0;
			}
		}
	}
</style>
