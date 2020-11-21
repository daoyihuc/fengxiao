<template>
	<!-- <view class="login" :style="'background: url(' + bgImg[imgIndex] + '); background-size: cover;background-repeat:no-repeat; background-position: center;'">
		<view class="logo">
			<image src="/static/log.png"></image>
			<view class="wxLogin">
				<view>—— 快速登录 ——</view>
				<image src="/static/wx.png"></image>
				<button open-type="getUserInfo" @getuserinfo="getUserInfo">1</button>
			</view>
		</view>
	</view> -->
	<view class="login">
		<view class="logo">
			<image src="/static/log.png"></image>
			<view class="wxLogin">
				<view>—— 快速登录 ——</view>
				<!-- <image src="/static/wx.png"></image> -->
				<button plain="" open-type="getUserInfo" @getuserinfo="getUserInfo">微信授权登录</button>
				<view class="cancel" @tap='cancel'>
					取消授权
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/* 接口名称 */
	import {
		Logn
	} from "../../../api/Index/index.js"

	export default {
		data() {
			return {
				bgImg: ['https://6d61-matchbox-79a395-1302390714.tcb.qcloud.la/matchbox/img_flower_4.jpg',
					'https://6d61-matchbox-79a395-1302390714.tcb.qcloud.la/matchbox/img_flower_1.jpg',
					'https://6d61-matchbox-79a395-1302390714.tcb.qcloud.la/matchbox/img_flower_3.jpg',
					'https://6d61-matchbox-79a395-1302390714.tcb.qcloud.la/matchbox/img_flower_2.jpg'
				],
				imgTime: '',
				imgIndex: 0,
				code: '', //登录code
				gender: '', //性别
				nickname: '', //姓名
				avatar: '', //头像
				inviteuid: '', //邀请人id
			};
		},


		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			// #ifdef MP-WEIXIN
			this.wxlogin(); //小程序获取用户code
			// #endif
		},
		/* 分享 */
		onShareAppMessage(res) {

		},

		/**
		 * 生命周期函数--监听页面初次渲染完成
		 */
		onReady: function() {},

		/**
		 * 生命周期函数--监听页面显示
		 */
		onShow: function() {
			this.setbImg(); //动态切换背景
		},

		/**
		 * 生命周期函数--监听页面隐藏
		 */
		onHide: function() {
			clearInterval(this.imgTime);
		},

		/**
		 * 生命周期函数--监听页面卸载
		 */
		onUnload: function() {
			clearInterval(this.imgTime);
		},

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
		methods: {
			cancel(){
				uni.switchTab({
					url:'../../store/store'
				})
			},
			getUserInfo() {
				var that = this;
				let _this = this;
				uni.getUserInfo({
					provider: 'weixin',
					success: (infoRes) => {
						var data = {
							code: this.code,
							gender: infoRes.userInfo.gender,
							nickname: infoRes.userInfo.nickName,
							avatar: infoRes.userInfo.avatarUrl,
							inviteuid: uni.getStorageSync('id')
						};
						/* 调用登录*/
						Logn(data).then(res => {
							if (res.code == 1) {
								uni.showToast({
									title: res.msg,
									icon: 'none',
									success: () => {
										uni.setStorageSync('token', res.data.Token);
										// uni.setStorageSync('id', res.data.UserInfo.id);
										// uni.setStorageSync('userInfo', res.data.UserInfo);
										uni.navigateBack({
											delta: 1
										})
									}
								})
							}
						});

					},

					fail(res) {}

				});
			},
			setbImg() {
				clearInterval(this.imgTime);
				let that = this;
				console.log('执行了');
				let imgTime = setInterval(() => {
					let imgIndex = that.imgIndex + 1;
					if (imgIndex >= that.bgImg.length) {
						imgIndex = 0;
					}
					this.imgIndex = imgIndex;
				}, 8000);
				this.imgTime = imgTime;
			},
			wxlogin() {
				// 1.wx获取登录用户code
				uni.login({
					provider: 'weixin',
					success: (loginRes) => {
						this.code = loginRes.code;
					}
				});
			},

		}
	};
</script>
<style scoped lang="scss">
	.login {
		height: 100%;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		transition: all 0.6s ease-in-out;
		// background-color: #333;
	}

	.logo image {
		height:250rpx;
		width: 250rpx;
		display: block;
		border-radius: 50%;
		margin: 0 auto;
		margin-top: 150upx;
	}

	.login_from {
		width: 80vw;
		margin: 0 auto;
		margin-top: 10vh;
	}

	.login_from .codes {
		display: flex;
		align-items: center;
		align-content: center;
		justify-content: space-between;
	}

	.login_from input {
		height: 80upx;
		line-height: 80upx;
		margin-bottom: 60upx;
		background-color: rgba(255, 255, 255, 0.8);
		box-sizing: border-box;
		padding: 0 30upx;
		border-radius: 10upx;
		font-size: 26upx;
		color: #333;
	}

	.codes input {
		width: 75%;
	}

	.codes view {
		height: 80upx;
		line-height: 80upx;
		width: 130upx;
		margin-bottom: 60upx;
		color: #FFFFFF;
		background-color: rgba(70, 143, 152, 0.8);
		text-align: center;
		font-size: 24upx;
		border-radius: 10upx;
	}

	.login_btn {
		width: 500upx;
		height: 80upx;
		margin: 0 auto;
		background-color: rgba(70, 143, 152, 0.8);
		margin-top: 60px;
		text-align: center;
		line-height: 80upx;
		border-radius: 40upx;
		color: #fff;
	}

	.login_btn:active {
		opacity: 0.9;
	}

	.wxLogin {
		height: 200upx;
		width: 300upx;
		display: block;
		margin: 150rpx auto;
		border-radius: 50%;
		position: fixed;

		left: 50%;
		transform: translateX(-50%);
	}

	.wxLogin view {
		text-align: center;
		color: #FFFFFF;
		font-size: 24upx;
		margin-bottom: 20upx;
	}

	.wxLogin image {
		height: 100upx;
		width: 100upx;
		display: block;
		z-index: 10;
		margin: 0 auto;
	}

	.wxLogin button {
		width: 400rpx !important;
		// height: 100upx;
		position: absolute;
		border-radius: 50rpx;
		text-align: center;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border: none;
		font-size: 14px;
		padding: 5rpx ;
		color: #fff;
		background:#ee521d ;
		font-weight: 600;
	}
	.cancel{
		width: 400rpx !important;
		 // height: 100upx;
		position: absolute;
		border-radius: 50rpx;
		text-align: center;
		top: 100%;
		left: 50%;
		transform: translate(-50%, -50%);
		border: 1px solid #E5E5E5;
		font-size: 14px;
		padding: 18rpx 0 !important;
		color: #000000 !important; 
		font-weight: 600;
	}
</style>
