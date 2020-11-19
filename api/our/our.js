import request from "../../utils/request.js"

/* 我的二维码接口 */
export function MyCode(data){
	return request('MyCode',data)
}

/* 关于我们接口 */
export function AboutUs(data){
	return request('AboutUs',data)
}

/* 意见反馈接口 */
export function FeedBack(data){
	return request('FeedBack',data)
}

/* 
 我的店铺接口
 */


/* 我的店铺-订单明细列表接口 */
export function StoreOrderList(data){
	return request('StoreOrderList',data)
}

/* 我的店铺-经营数据接口 */
export function BusinessData(data){
	return request('BusinessData',data)
}

/* 我的店铺接口 */
export function MyStore(data){
	return request('MyStore',data)
}

/* 门店中心详情接口 */
export function StoreInfo(data){
	return request('StoreInfo',data)
}

/* 我的店铺实时搜索接口 */
export function StoreTimeSearch(data){
	return request('StoreTimeSearch',data)
}
/* 我的店铺搜索接口 */
export function StoreSearch(data){
	return request('StoreSearch',data)
}




