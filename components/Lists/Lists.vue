<template>
	<view>
		<view class="withdrawalrecord">
			<view v-for="(item, index) in logList" :key="index" class="record_list">
				<view class="left">
					<view class="title">{{item.title}}</view>
					<view class="time">{{item.time}}</view>
				</view>
				<view class="right">
					<view>-{{item.money}}</view>
					<view class="time" v-if="item.statust==1">已冻结</view>
				</view>
			</view>
			<view class="nodata" v-if="logList.length >= 6">—— 到底啦 ——</view>
		</view>
		<nodata :colors="colors" title="暂无明细" v-if="logList.length == 0"></nodata>
	</view>
</template>

<script>
	import loading from "../public/loading.vue";
	export default {
        props:{
			logList:{
				type:Array,
				default:[]
			}
		},
		data() {
			return {
			
			};
		},

		components: {
			loading
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
		},

		/**
		 * 生命周期函数--监听页面初次渲染完成
		 */
		onReady: function() {},

		/**
		 * 生命周期函数--监听页面显示
		 */
		onShow: function() {},

		/**
		 * 生命周期函数--监听页面隐藏
		 */
		onHide: function() {},

		/**
		 * 生命周期函数--监听页面卸载
		 */
		onUnload: function() {},

		/**
		 * 页面相关事件处理函数--监听用户下拉动作
		 */
		onPullDownRefresh: function() {},

		/**
		 * 页面上拉触底事件的处理函数
		 */
		onReachBottom: function() {},

		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage: function() {},
		methods: {}
	};
</script>
<style scoped lang="scss">
	page {
		background-color: #F7F4F8;
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
</style>
