<template>
	<view>
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
						title:'提现',
						money:'50'
					},
					{
						time:'2020-10-25',
						title:'提现',
						money:'50'
					},
					{
						time:'2020-10-25',
						title:'提现',
						money:'50'
					}
				],
				isShow: true
			};
		},

		components: {
			loading,
			Lists
		},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			setTimeout(() => {
				this.isShow = false
			}, 600);
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
</style>
