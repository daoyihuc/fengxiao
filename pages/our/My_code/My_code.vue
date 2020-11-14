<template>
	<view class="content">
		<view class="auto">
			<image class="image_name" :src="data.MemberInfo.avatar" mode=""></image>
			<view class="name">
				{{data.MemberInfo.nickname}}
			</view>
			<view class="code">
			   扫描下方二维码加我
			</view>
			<image class="image_code" :src="data.erweima" mode=""></image>
		</view>
		<!-- 页面加载 -->
		<loading v-if="isShow == true"></loading>
	</view>
</template>

<script>
	import loading from "../../../components/public/loading.vue";
	import {MyCode} from '../../../api/our/our.js'
	export default {
		data() {
			return {
				data:{},//所有数据
				isShow: true,
			}
		},
		onLoad() {
			this.getdata();
		},
		methods: {
			getdata(){
				MyCode({
					token:uni.getStorageSync('token')
				}).then(res=>{
					if(res.code==1){
						this.data=res.data;
						this.isShow=false;
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
					}
				})
			}
		},
		components:{
			loading
		}
	}
</script>

<style lang="scss">
	.content{
		.auto{
			background: rgba(255, 255, 255, 0.89);
			box-shadow: 0px 4rpx 68rpx 0px rgba(39, 52, 125, 0.25);
			border-radius: 24rpx;
            margin: 200rpx 50rpx;
			text-align: center;
			.image_name{
				width: 150rpx;
				height: 150rpx;
				margin-top: -50rpx;
				border-radius: 50%;
			}
			.image_code{
				width: 400rpx;
				height: 400rpx;
				padding: 20rpx 0;
			}
			.name{
				font-size: 16px;
				font-weight: 600;
				padding: 20rpx;
			}
		}
	}

</style>
