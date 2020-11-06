<template>
	<view class="content">
		<!-- 店铺详情 -->
		<view class="title_top" v-for="(item,index) in 3">
			<view class="left">
				<image src="../../../static/img/index/beijingh.png" mode=""></image>
			</view>
			<view class="right">
				<view class="img_li">
				     <text style="font-weight: 600;font-size: 15px;">万家丽店</text>
				</view>
				<view class="img_li">
				     <text>电话：14760716236</text>
				</view>
				<view class="img_li">
				     <text>地址：开福区万达国际总部c3栋1005开福区万达国际总部c3栋1005</text>
				</view>
				<view class="bot" @tap='store_url'>
					查看
				</view>
				
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			/* 门面详情 */
			store_url(){
				uni.navigateTo({
					url:'../Store_info/Store_info'
				})
			},
		}
	}
</script>

<style lang="scss">
.title_top{
			display: flex;
			justify-content: space-between;
			padding: 20rpx;
			border-top: 1px solid #eee;
			color: #4d4d47;
			image{
				width: 300rpx;
				height: 230rpx;
			}
			.right{
				padding-left: 10rpx;
				.img_li{
					font-size: 14px;
					padding-top: 15rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
					image{
						width: 30rpx;
						height: 30rpx;
					}
					text{
						padding-left: 15rpx;
					}
					
				}
				.bot{
				     width: 110rpx;
					 height: 50rpx;
					 font-size: 14px;
					 color: #FFFFFF;
					background: linear-gradient(72deg, #FF444B, #FD7239);
					border-radius: 50rpx;
					text-align: center;
					line-height: 50rpx;
					margin: 20rpx;
				}
			}
		}
		
</style>
