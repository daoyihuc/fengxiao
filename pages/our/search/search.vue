<template>
	<view class="content">
		<!-- 搜索条 -->
		<view class="search" @tap="search">
			<image src="../../../static/img/our/store/search.png" mode=""></image>
			<input type="text" :value="search_text" @input='input_color'/>
		</view>
		<!-- 为你搜索到的类容 -->
		<view class="search_list">
			<view class="text">
				为您搜索到
			</view>
			<view class="search_li" @tap='tab_searchm(item)' v-for="(item,index) in color_list">
				<image :src="item.avatar" mode=""></image>
				<view class="phone">
					<text style="color: #eeab0e;">{{item.color_text}}</text>
					<text>{{item.no_color_text}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {StoreSearch ,StoreTimeSearch} from '../../../api/our/our.js'
	export default {
		data() {
			return {
				search_text:'',//搜索的类容
				search_list:[
					// {
					// 	image:'../../../static/img/index/erweima.png',
					// 	text:'14760716236'
					// },
					// {
					// 	image:'../../../static/img/index/erweima.png',
					// 	text:'14589568521'
					// },
					// {
					// 	image:'../../../static/img/index/erweima.png',
					// 	text:'15698563247'
					// }
				],
				color_list:[],//截取有颜色的数组
				color_text:'',//有颜色的文字
				no_color_text:'',//没有颜色的文字
				Mobile:'',//会员电话
			}
		},
		/* 分享 */
		 onShareAppMessage(res){
			 
		 },
		methods: {
			/* 跳转搜索页面 */
			tab_searchm(item){
				console.log(item.Mobile)
				uni.navigateTo({
					url:'../search_info/search_info?Mobile='+item.Mobile
				})
			},
			/* 搜索的类容与下面的匹配 */
			input_color(e){
				this.search_text=e.detail.value;
				var lenght=e.detail.value.length;
				this.getdata();
				var arr=[];
				for(var i in this.search_list){
					var json={};
					json.avatar=this.search_list[i].avatar;
					json.Mobile=this.search_list[i].mobile;
					json.color_text=this.search_list[i].mobile.slice(0,lenght);
					json.no_color_text=this.search_list[i].mobile.slice(lenght,12);
					arr.push(json);
				}
				this.color_list=arr;
			},
			/* 搜索*/
			getdata(){
				StoreTimeSearch({
					token:uni.getStorageSync('token'),
					Mobile:this.search_text
				}).then(res=>{
					if(res.code==1){
						this.search_list=res.data;
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
		.search {
			background-color: #F4F4F4;
			border-radius: 30rpx;
			margin: 0 20rpx;
			display: flex;
			align-items: center;
		
			image {
				width: 40rpx;
				height: 40rpx;
				line-height: 40rpx;
				margin-left: 20rpx;
				padding: 10rpx;
			}
		}
		/* 为你搜索到的类容 */
		.search_list{
			.text{
				font-size: 12px;
				padding: 20rpx;
				border-bottom: 1px solid #eee;
			}
			.search_li{
				display: flex;
				align-items: center;
				padding: 20rpx;
				border-bottom: 1px solid #eee;
				image{
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
				}
				.phone{
					font-size: 14px;
					padding: 0 20rpx;
				}
			}
		}
		
	}

</style>
