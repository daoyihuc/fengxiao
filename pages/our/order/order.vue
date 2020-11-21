<template>
	<view class="content">

		<!-- 表单提交 -->
		<form @submit="onSubmit">
			<view class="li">
				<text>金额</text>
				<input type="text" :value="name" name="StoreName" placeholder="请填写金额" />
			</view>
			<view class="li">
				<text>时间</text>
				<picker mode="date" :value="date"  @change="bindDateChange">
					<view class="uni-input">{{time}}</view>
				</picker>
			</view>
			<view class="li">
				<text>用户</text>
					<view class="uni-input" @tap='tap_user_id'>{{user_name}}</view>
			</view>
			<button form-type="submit" plain>提交</button>
		</form>
		<uni-popup ref="popup" type="bottom">
			<view class="list">
				<view class="li" v-for="(item,index) in list" @tap="select_id(item)">
					<view class="text">
						{{item.nickname}}
					</view>
				</view>
				<view class="" v-if="list.lenght==0">
					暂无数据
				</view>
			</view>
		</uni-popup>

	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import { AddStoreOrder,GetStoreMember} from '../../../api/store/store.js'
	export default {
		data() {
			return {
				name:'',
				time:'请选择时间',
				user_id:'',//用户id
				user_name:'请选择',
				list:[],
			}
		},
		/* 分享 */
		 onShareAppMessage(res){
			 
		 },
		onLoad() {
			this.getdata();
		},
	
		methods: {
			
			/* 表单数据 */
			onSubmit(e) {
				console.log(e)
				var data={
					token:uni.getStorageSync('token'),
					money:e.detail.value.StoreName,//门店名
					dateline:this.time,//详细地址
					user_id:this.user_id,
				};
				AddStoreOrder(data).then(res=>{
					if(res.code==1){
						uni.showToast({
							title:res.msg,
							icon:'none',
							success: () => {
								this.getStatus();
								this.gray=0;
							}
						})
						
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
					}
				})
	
			},
			/* 打卡用户id */
			tap_user_id(){
				this.$refs.popup.open();
			},
			/* 打卡用户id */
			select_id(item){
				this.user_id=item.uid;
				this.user_name=item.nickname;
				this.$refs.popup.close();
			},
			bindDateChange (e){
				this.time=e.detail.value
			},
			/* 获取 */
			getdata(){
				GetStoreMember({
					token:uni.getStorageSync('token')
				}).then(res=>{
					if(res.code==1){
						this.list=res.data;
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
					}
				})
			},
		},
		 components: {
		        uniPopup,
		    }
	}
</script>

<style lang="scss">
	.content {
		.list{
			width: 100%;
			height: 500rpx;
			border-radius: 10rpx 10rpx 0  0;
			background-color: #FFFFFF;
		}
		.bar {
			display: flex;
			justify-content: center;
			text-align: center;
			font-size: 15px;
			border-bottom: 8px solid #f9f9f9;
			padding-bottom: 30rpx;

			image {
				width: 100rpx;
				height: 100rpx;

			}

			.row {
				width: 50rpx;
				height: 1px;
				margin-top: 50rpx;
				margin-left: 50rpx;
				margin-right: 50rpx;
				background-color: rgba(250, 95, 62, 1);
			}

			.name {
				padding-top: 10rpx;
				color: rgba(250, 95, 62, 1);
				// color: rgba(194, 194, 194, 1);
			}

			.active {
				filter: grayscale(1);
				color: rgba(194, 194, 194, 1);
			}
		}

		.li {
			display: flex;
			align-items: center;
			padding: 30rpx;
			border-bottom: 1px solid #f8f8f8;
			font-size: 14px;
			input {
				padding-left: 20rpx;
			}
			image{
				width: 25rpx;
				height: 30rpx;
				// margin-left: 50%;
			}
			.uni-input{
				width: 500rpx;
				padding-left: 20rpx;
				color:rgba(134, 134, 134, 1.0);
			}
			textarea{
				width: 95%;
				background: #f9f9f9;
				border-radius: 5px;
				padding: 20rpx;
			}
		}
		.license{
			background-color: #f7f7f7;
			border-radius: 10rpx;
			font-size: 14px;
			color: rgba(108, 108, 108, 1);
			text-align: center;
			padding: 20rpx;
			margin: 20rpx;
			image{
				padding-top: 20rpx;
				width: 400rpx;
				height: 200rpx;
			}
		}
		button{
			width: 500rpx;
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
			color: #FFFFFF;
			font-size: 14px;
			border: none;
			background: linear-gradient(87deg,#FF4A16,#FFA25D);
			box-shadow: -1px 2px 5px 0px rgba(250, 95, 62, 0.6);
			border-radius: 38px;
			margin: 50rpx auto;
		}
		.wait{
			margin: auto;
			text-align: center;
			color: #bababa;
			text-align: center;
			font-size: 14px;
		}
	}
</style>
