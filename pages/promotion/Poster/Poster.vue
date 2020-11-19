<template>
	<view class="content">
		<view class="bg">
			<image class="img" src="../../../static/fenxiang.png" mode=""></image>
		</view>
		<view class="our">
			<image class="imgs" :src="poster.erweima" mode="" show-menu-by-longpress></image>
			<view class="infor">
			 <view class="">
			  	{{poster.nickname}}
			  </view>
			  <view class="">
			  	邀请您加入
			  </view>
			</view>
		</view>
		
<!-- 	    <view class="" @tap='savePosterPath'>
	    	保存
	    </view> -->
		<!-- 页面加载 -->
		<loading v-if="isShow == true"></loading>
	</view>
</template>

<script>
	import loading from "../../../components/public/loading.vue";
	import {PromoterPoster} from '../../../api/Center/Center.js'
	export default {
		data() {
			return {
				poster:'',//必须是https图片
			    id:null,
				isShow: true,
			}
		},
		/* 分享 */
		 onShareAppMessage(res){
			 
		 },
		onLoad(e) {
			this.id=e.id;
			PromoterPoster({
				token:uni.getStorageSync('token'),
				StoreId:this.id
			}).then(res=>{
				if(res.code==1){
					
					this.poster=res.data;
					this.isShow = false;
				}else{
					uni.showToast({
						title:res.msg,
						icon:'none'
					})
				}
			})
		},
		methods: {
			 savePosterPath: function () {
			    var that = this;
			    uni.downloadFile({
			      url: that.poster,
			      success(resFile) {
			        if (resFile.statusCode === 200) {
			          uni.getSetting({
			            success(res) {
			              if (!res.authSetting['scope.writePhotosAlbum']) {
			                uni.authorize({
			                  scope: 'scope.writePhotosAlbum',
			                  success() {
			                    uni.saveImageToPhotosAlbum({
			                      filePath: resFile.tempFilePath,
			                      success: function (res) {
						 console.log('保存成功')
			                      },
			                      fail: function (res) {
			                        console.log('保存失败')
			                      },
			                      complete: function (res) { },
			                    })
			                  },
			                  fail() {
			                    uni.showModal({
			                      title: '您已拒绝获取相册权限',
			                      content: '是否进入权限管理，调整授权？',
			                      success(res) {
			                        if (res.confirm) {
			                          uni.openSetting({
			                            success: function (res) {
			                              console.log(res.authSetting)
			                            }
			                          });
			                        } else if (res.cancel) {
			                           console.log('保存失败')
			                        }
			                      }
			                    })
			                  }
			                })
			              } else {
			                uni.saveImageToPhotosAlbum({
			                  filePath: resFile.tempFilePath,
			                  success: function (res) {
			                     console.log('保存成功')
			                  },
			                  fail: function (res) {
			                     console.log('保存失败')
			                  },
			                  complete: function (res) { },
			                })
			              }
			            },
			            fail(res) {
			            }
			          })
			        } else {
					   console.log('成功失败')
			        }
			      },
			      fail(res) {
					 console.log(res.errMsg)
			      }
			    })
			  },
		},
		components:{
			loading
		}
	}
</script>

<style lang="scss">
	.content{
		.bg{
			display: flex;
			justify-content: center;
		}
		.img{
			// margin: 50rpx;
			height: 1000rpx;
			border-radius: 20rpx;
		}
		.imgs{
			width: 130rpx;
			height: 130rpx;
			border-radius: 20rpx;
		}
		.our{
			margin-top: -200rpx;
			display: flex;
			align-items: center;
			margin-left: 100rpx;
			.infor{
				font-size: 13px;
				font-weight: 600;
				view{
					padding: 5rpx 10rpx;
				}
			}
		}
	}

</style>
