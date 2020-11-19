<template>
	<view class="content">
		<view class="li" >
			<view class="li_left" >
				头像
			</view>
			<view class="li_right" >
				<view class="">
					<image class="img" :src="image" mode="" @tap='select_img'></image>
				</view>
				<view class="">
					<image class="jian" src="../../../static/img/our/jiantou.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="li">
			<view class="li_left">
				ID号
			</view>
			<view class="li_right">
				<input type="text" :value="name" disabled=""/>
			</view>
		</view>
		<view class="li">
			<view class="li_left">
				性别
			</view>
			<view class="li_right">
				<!-- <input type="text" :value="gender"  @input='gender_input'/> -->
				<radio-group name="" @change="radio_change">
					<label>
						<radio :value="0" style="transform:scale(0.7)"/><text>保密</text>
					</label>
					<label>
						<radio :value="1" style="transform:scale(0.7)"/><text>男</text>
					</label>
					<label>
						<radio :value="2" style="transform:scale(0.7)"/><text>女</text>
					</label>
				</radio-group>
			</view>
		</view>
		<view class="li">
			<view class="li_left">
				手机号
			</view>
			<view class="li_right">
				<input type="text" :value="mobile" @input='mobile_input'/>
			</view>
		</view>
		<view class="bot" @tap='save'>
			保存
		</view>
	</view>
</template>

<script>
	import {getinfot ,EditMine} from '../../../api/Index/index.js'
	export default {
		data() {
			return {
				image:'../../../static/img/index/erweima.png',//头像
				id:'',//id号
				mobile:'绑定手机号',//电话
				gender:'',//性别
				name:'',
				data:{},//所以信息
			}
		},
		/* 分享 */
		 onShareAppMessage(res){
			 
		 },
		onLoad() {
			this.getdata();
		},
		methods: {
			/* 选择性别 */
			radio_change(e){
				this.gender=e.detail.value;
			},
			/* 跟换头像 */
			select_img(){

					uni.chooseImage({
						count: 1, //默认9
						sizeType: ['original'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album'], //从相册选择
						success: (res) => {
							this.image = res.tempFilePaths[0];
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
				/* 获取性别 */
				gender_input(e){
					this.gender=e.detail.value;
				},
				/* 获取电话号 */
				mobile_input(e){
					this.mobile=e.detail.value;
				},
				/* 保存 */
				save(){
					var data={
						token:uni.getStorageSync('token'),
						mobile:this.mobile,
						gender:this.gender,
						avatar:this.image.split(',')[1]
					};
					EditMine(data).then((res)=>{
						if(res.code==1){
							uni.showToast({
								title:res.msg,
								icon:"none",
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
			/* 获取个人信息 */
			getdata(){
				this.score=uni.getStorageSync('userInfo').score;
				this.fronzen_score=uni.getStorageSync('userInfo').fronzen_score;
				getinfot({token:uni.getStorageSync('token')}).then((res)=>{
					if(res.code==1){
						this.data=res.data;
						this.mobile=res.data.mobile==''?'请输入手机号':res.data.mobile;
						this.image=res.data.avatar;
						this.name=res.data.id;
						if(res.data.gender==2){
							this.gender='女';
						}else if(res.data.gender==1){
							this.gender='男';
						}else{
							this.gender='保密';
						}
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.content{
		.li{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding:10rpx 30rpx;
			border-bottom: 1px solid #f4f4f4;
			height: 100rpx;
			.img{
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				margin-left: 350rpx;
			}
			.jian{
				width: 15rpx;
				height: 20rpx;
				padding-left: 20rpx;
			}
			.li_right{
				width: 500rpx;
				display: flex;
				align-items: center;
				color: #a5a5a5;
			}
			
		}
		.bot{
			border-radius: 40rpx;
			border: 1px solid #E5E5E5;
			color: #F0AD4E;
			width: 200rpx;
			height: 70rpx;
			line-height: 70rpx;
			text-align: center;
			margin: 100rpx auto;
		}
	}

</style>
