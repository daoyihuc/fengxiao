<template>
	<view class="content">
		<view class="list">
			<view class="li">
				<view class="top">
					2020-5-28
				</view>
				<view class="fot">
					<view class="left">
						<text>用户id：</text>小仙女
					</view>
					<view class="right">
						+100
					</view>
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
			
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #f1f1f1;
	}
	.content{
		.list{
			.li{
				background-color: #FFFFFF;
				border-radius: 20rpx;
				margin: 20rpx;
				.top{
					font-size: 14px;
					color: #d6d6d6;
					padding: 20rpx;
					border-bottom: 1px solid #eee;
				}
				.fot{
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: 16px;
					padding: 20rpx;
					color: #3a3a3a;
					.right{
						color: #FA5F3E;
					}
				}
			}
		}
	}

</style>
