<template>
	<view class="content">
		<image :src="poster" mode="" show-menu-by-longpress></image>
<!-- 	    <view class="" @tap='savePosterPath'>
	    	保存
	    </view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				poster:'https://greenmall.996sh.com//uploads/routine/spread/poster/966b620201104203719607376.jpg',//必须是https图片
			}
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
		}
	}
</script>

<style lang="scss">
	.content{
		image{
			margin: 50rpx;
			height: 1000rpx;
			border-radius: 20rpx;
		}
	}

</style>
