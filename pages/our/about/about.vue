<template>
	<view class="content">
		{{data.content}}
	</view>
</template>

<script>
	import {AboutUs} from '../../../api/our/our.js'
	export default {
		data() {
			return {
				data:{},//所有数据
			}
		},
		onLoad() {
			this.getdata();
		},
		methods: {
			/* 获取数据 */
			getdata(){
				AboutUs({
					token:uni.getStorageSync('token')
				}).then(res=>{
					if(res.code==1){
						this.data=res.data;
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
		font-size: 15px;
		padding: 30rpx;
	}

</style>
