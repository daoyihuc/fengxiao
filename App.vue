<script>
	import {Logn} from 'api/Index/index.js'
	export default {
		onLaunch: function() {
			// 获取用户信息,自动登录
			var codes;
			uni.login({
				provider: "weixin",
				success: (res) => {
					codes = res.code;
				}
			});
			uni.getSetting({
			  success: res => {
			    if (res.authSetting['scope.userInfo']) {
			      // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
			      uni.getUserInfo({
			        success: infoRes => {
						var data={
							code:codes,
							gender:infoRes.userInfo.gender,
							nickname:infoRes.userInfo.nickName,
							avatar:infoRes.userInfo.avatarUrl,
							inviteuid:1
						};
						/* 调用登录*/
						Logn(data).then(res=>{
									  if(res.code==1){
										  uni.setStorageSync('token',res.data.Token);
										  uni.setStorageSync('userInfo',res.data.UserInfo);
			
									  }
						});
						
			          // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
			          // 所以此处加入 callback 以防止这种情况
			          if (this.userInfoReadyCallback) {
			            this.userInfoReadyCallback(res)
			          }
			        }
			      })
			    }
			  }
			})
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
