<template>
	<view class="content">
		<view class="bar">
			<view :class="gray==0?'left active':'left'">
				<image :class="gray==0?' active':''" src="../../../static/img/store/zizhi.png" mode=""></image>
				<view class="name">
					提交资质
				</view>
			</view>
			<view class="row">

			</view>
			<view :class="gray==1?'left active':'left'">
				<image :class="gray==1?'active':''" src="../../../static/img/store/shenhe2.png" mode=""></image>
				<view class="name">
					等待审核
				</view>
			</view>
		</view>
		<!-- 表单提交 -->
		<form @submit="onSubmit" v-if="gray==1">  
			<view class="li">
				<text>门店名称</text>
				<input type="text" :value="name" :name="name" placeholder="请填写门店名称" />
			</view>
			<view class="li">
				<text>门店地址</text>
				<picker @change="bindPickerChange" :value="index" mode="region">
					<view class="uni-input">{{address==''?'请选择地址':address}}</view>
				</picker>
				<image src="../../../static/img/store/dizhi11.png" mode=""></image>
			</view>
			<view class="li">
				<textarea value="" placeholder="填写详细地址" />
			</view>
			<view class="li">
				<text>门店电话</text>
				<input type="text" :value="name" :name="name" placeholder="请填写门店电话" />
			</view>
			<view class="">
				<text style="font-size: 14px;padding: 30rpx;">营业执照</text>
				<view class="license">
					<view class="text">
						请上传最新中国大陆营业执照正面照
					</view>
					<image :src="image" mode="" v-if="image=='../../../static/img/store/zhengmianz.png'" @tap='select_img'></image>
					<image :src="image" mode=""  v-if="image!='../../../static/img/store/zhengmianz.png'" @tap='show_img'></image>
				</view>
			</view>
			<button form-type="submit" plain>提交审核</button>
		</form>
		<!-- 等待审核 -->
		<view class="wait" v-if="gray==0">
			<image src="../../../static/img/store/quesheng1.png" mode=""></image>
	         <view class="text">
	         	信息审核需要1-3天噢，请耐心等待~
	         </view>	
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gray: 1,
				index: 0,
				address:'',
				image:'../../../static/img/store/zhengmianz.png',
				img_arr:[],
				name:'',
			}
		},
		methods: {
			/* 表单数据 */
			onSubmit(e) {
				console.log(e)
			},
			/* 地址选择 */
			bindPickerChange(e){
				this.address=e.detail.value[0]+','+e.detail.value[1]+','+e.detail.value[2];
				console.log(this.address)
			},
			/* 上传执业照 */
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

		}
	}
</script>

<style lang="scss">
	.content {
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
			color: #eee;
			text-align: center;
			font-size: 14px;
		}
	}
</style>
