<template>
	<view class="content">
		<!-- 搜索条 -->
		<view class="search" @tap="search">
			<image src="../../../static/img/our/store/search.png" mode=""></image>
			<input type="text" :value="search_text"/>
		</view>
		<!-- 为你搜索到的类容 -->
		<view class="search_list">
			<view class="text">
				为您搜索到
			</view>
			<view class="search_li" @tap='tab_searchm(1)'>
				<image src="../../../static/img/index/erweima.png" mode=""></image>
				<view class="phone">
					14760716236
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				search_text:'',//搜索的类容
			}
		},
		methods: {
			/* 跳转搜索页面 */
			tab_searchm(){
				uni.navigateTo({
					url:'../search_info/search_info?id='+1
				})
			}
		}
	}
</script>

<style lang="scss">
	.content{
		.search {
			background-color: #F4F4F4;
			border-radius: 30rpx;
			margin: 0 20rpx;
			display: flex;
			align-items: center;
		
			image {
				width: 40rpx;
				height: 40rpx;
				line-height: 40rpx;
				margin-left: 20rpx;
				padding: 10rpx;
			}
		}
		/* 为你搜索到的类容 */
		.search_list{
			.text{
				font-size: 12px;
				padding: 20rpx;
				border-bottom: 1px solid #eee;
			}
			.search_li{
				display: flex;
				align-items: center;
				padding: 20rpx;
				border-bottom: 1px solid #eee;
				image{
					width: 80rpx;
					height: 80rpx;
				}
				.phone{
					font-size: 14px;
					padding: 0 20rpx;
				}
			}
		}
		
	}

</style>
