<template>
	<view class="content">
		<!-- 手风琴效果 -->
		<!-- <uni-collapse accordion="true">
		    <uni-collapse-item title="问题类型">
		        <view style="padding: 30rpx;">
		            天天天天
		        </view>
		    </uni-collapse-item>
		</uni-collapse> -->
		<!-- 表单提交 -->
		<form @submit="onSubmit">  
			<view class="li">
				<textarea value="" name='content' placeholder="请描述您所遇到的问题..." />
			</view>
			<view class="text">
				0/200
			</view>
			<view class="">
					<image :src="image" mode="" v-if="image=='../../../static/img/our/shangchuan.png'" @tap='select_img'></image>
					<image :src="image" mode=""  v-if="image!='../../../static/img/our/shangchuan.png'" @tap='show_img'></image>
			</view>
			<button form-type="submit" plain>提交</button>
		</form>
	</view>
</template>

<script>
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	import {FeedBack} from '../../../api/our/our.js'
	export default {
		data() {
			return {
				image:'../../../static/img/our/shangchuan.png',
				img_arr:[],
			}
		},
		/* 分享 */
		 onShareAppMessage(res){
			 
		 },
		methods: {
			/* 表单数据 */
			onSubmit(e) {
				console.log(e)
				FeedBack({
					token:uni.getStorageSync('token'),
					content:e.detail.value.content,
					images:this.image.split(',')[1]
				}).then(res=>{
					if(res.code==1){
						uni.showToast({
							title:res.msg,
							icon:'none',
							success: () => {
								uni.navigateBack({
									delta:1
								})
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
			/* 上传照 */
			select_img() {
				
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						this.image = res.tempFilePaths[0];
						this.img_arr=res.tempFilePaths;
						uni.getFileSystemManager().readFile({
							filePath: this.image,
							encoding: 'base64',
							success: r => { // r.data 
								this.image = 'data:image/jpeg;base64,'+r.data;
							}
						})
					},
				});
			},
			/* 查看图片 */
			show_img(){
				uni.previewImage({
				          urls: this.img_arr,
				          longPressActions: {
				              itemList: ['发送给朋友', '保存图片', '收藏'],
				              success: function(data) {
				                  console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
				              },
				              fail: function(err) {
				                  console.log(err.errMsg);
				              }
				          }
				      });
			},
			
		},
		 components: {uniCollapse,uniCollapseItem}
	}
</script>

<style lang="scss">
	.content{
		
		.li {
			display: flex;
			align-items: center;
			padding: 30rpx;
			font-size: 14px;
			input {
				padding-left: 20rpx;
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
			color: #eee;
			text-align: center;
			font-size: 14px;
		}
		image{
			width: 150rpx;
			height: 150rpx;
			margin-left: 25rpx;
		}
		.text{
			font-size: 14px;
			color: #b4b4b4;
			text-align: right;
			padding: 0 20rpx;
		}
	}

</style>
