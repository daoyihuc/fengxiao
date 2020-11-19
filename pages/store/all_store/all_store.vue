<template>
	<view class="content">
	<!-- 店铺详情 -->
	<view class="title_top" v-for="(item,index) in StoreList" :key='index'>
		<view class="left">
			<image :src="item.logo" mode=""></image>
		</view>
		<view class="right">
			<view class="img_li">
			     <text style="font-weight: 600;font-size: 15px;">{{item.store_name}}</text>
			</view>
			<view class="img_li">
			     <text>电话：{{item.mobile}}</text>
			</view>
			<view class="img_li">
			     <text>地址：{{item.province}}{{item.city}}{{item.district}}{{item.address}}</text>
			</view>
			<view class="bot" @tap='store_url(item)'>
				查看
			</view>
			
		</view>
	</view>
	<view class="wait" v-if="StoreList==0">
		<image src="../../static/img/store/quesheng1.png" mode=""></image>
	     <view class="text" style="text-align: center;font-size: 14px; color: #808080;" >
	     	暂无数据
	     </view> 	
	</view>
	</view>
</template>

<script>
	import loading from "../../../components/public/loading.vue";
	import { StoreList} from '../../../api/store/store.js'
	export default {
		data() {
			return {
				isShow: true,
				Page:1,//页面
				StoreList:[],//门店列表
				data:{},//所有数据
			}
		},
		/* 分享 */
		 onShareAppMessage(res){
			 
		 },
		onLoad() {
			/* 调用获取页面信息方法 */
			this.getdata();
		},
		/* 上拉刷新 */
		onReachBottom(){
			this.Page++;
			this.getdata();
		},
		methods: {
			/* 门面详情 */
			store_url(item){
				uni.navigateTo({
					url:'../Store_info/Store_info?id='+item.id
				})
			},
			/* 获取页面数据*/
			getdata(){
				StoreList({
					Page:this.Page
				}).then(res=>{
					if(res.code==1){
						this.data=res.data;
						this.StoreList=[...this.StoreList,...res.data.List];
					}else{
						uni.showToast({
							title:res.msg,
							icon:"none"
						})
					}
				})
			},
		}
	}
</script>

<style lang="scss">
.title_top{
			display: flex;
			justify-content: space-between;
			padding: 20rpx;
			border-top: 1px solid #eee;
			color: #4d4d47;
			image{
				width: 300rpx;
				height: 230rpx;
				border-radius: 10rpx;
			}
			.right{
				padding-left: 10rpx;
				.img_li{
					font-size: 14px;
					padding-top: 15rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
					image{
						width: 30rpx;
						height: 30rpx;
					}
					text{
						padding-left: 15rpx;
					}
					
				}
				.bot{
				     width: 110rpx;
					 height: 50rpx;
					 font-size: 14px;
					 color: #FFFFFF;
					background: linear-gradient(72deg, #FF444B, #FD7239);
					border-radius: 50rpx;
					text-align: center;
					line-height: 50rpx;
					margin: 20rpx;
				}
			}
		}
		
</style>
