<template>
	<view class="content">
		<!-- 搜索条 -->
		<view class="search_bg">
			<view class="search" @tap="search">
				<image src="../../../static/img/our/store/search.png" mode=""></image>
				<input type="text" :value="search_text" @blur='select_value'/>
			</view>
			<view class="text" @tap='open'>
				筛选<image src="../../../static/img/our/shaixuan.png" mode=""></image>
			</view>
		</view>
		<!-- 订单列表 -->
		<view class="list">
			<view class="li" v-for="(item,index) in list">
				<view class="top">
					<view class="">
						{{item.time}}
					</view>
					<view class="">
						{{item.type==1?'门店消费订单':'充值订单'}}
					</view>
				</view>
				<view class="fot">
					<view class="left">
						<text>用户id：</text>{{item.nickname}}
					</view>
					<view class="right">
						{{item.money}}
					</view>
				</view>
			</view>
		</view>
		<view  v-if="list==0">
			<image src="../../../static/img/store/quesheng1.png" mode=""></image>
		     <view  style="text-align: center;font-size: 14px; color: #808080;" >
		     	暂无数据
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
					<view :class="time_current==item.value?'time_li active':'time_li' " v-for="(item,index) in dateline_list"  @tap='time(item)'>
						{{item.title}}
					</view>
				</view>
				<!-- 筛选条件 -->
				<view class="time">
					<text>明细</text>
					<image src="../../../static/img/our/store/dowm.png" mode=""></image>
				</view>
				<view class="time_list">
					<view :class="small_current==item.value?'time_li active':'time_li' "  v-for="(item,index) in type_li" @tap='small(item)'>
						{{item.title}}
					</view>
				</view>
				<!-- 确定按钮 -->
				<view class="bot" @tap='save'>
					确定
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	/* 接口 */
	import {StoreOrderList} from '../../../api/our/our.js'
	export default {
		data() {
			return {
				search_text: '', //搜索的类容
				height: null, //页面的高度
				time_current:null,//时间的选择
				small_current:null,//明细的选择
				list:[],//列表参数
				Page:1,//页面
				dateline_list:[// 数据筛选
					{
						title:'月',
						value:'month'
					},
					{
						title:'季度',
						value:'quarter'
					},
				],
				type_li:[//明细类型筛选
					{
						title:'充值明细',
						value:1
					},
					{
						title:'消费明细',
						value:2
					}
				],
			}
		},
		/* 分享 */
		 onShareAppMessage(res){
			 
		 },
		onLoad() {
			/* 获取高度 */
			try {
				const res = uni.getSystemInfoSync();
				this.height = res.windowHeight;
				console.log(res.windowHeight);
			} catch (e) {
				// error
			}
			/* 接口 */
			this.getdata();
			
		},
		methods: {
			/* 弹窗筛选 */
			open() {
				this.$refs.popup.open();
			},
			/* 时间的选择 */
			time(item){
				this.time_current=item.value;
			},
			/* 明细 */
			small(item){
				this.small_current=item.value;
			},
			/* 筛选的值 */
			select_value(e){
				this.search_text=e.detail.value;
				this.list=[];
				this.getdata();
			},
			/* 点击筛选 */
			save(){
				this.list=[];
				this.getdata();
				this.$refs.popup.close ();
			},
			/* 获取页面数据 */
			getdata(){
				StoreOrderList({
					token:uni.getStorageSync('token'),
					Page:this.Page,
					Keywords:this.search_text,
					dateline:this.time_current,
					type:this.small_current
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
					padding: 20rpx 30rpx;
					border-bottom: 1px solid #eee;
					display: flex;
					justify-content: space-between;
				}

				.fot {
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: 16px;
					padding: 20rpx 30rpx;
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
