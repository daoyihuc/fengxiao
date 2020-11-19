import request from "../../utils/request.js"

/* 门店入驻接口 */
export function StoreEntry(data){
	return request('StoreEntry',data)
}

/* 门店审核状态接口 */
export function StoreStatus(data){
	return request('StoreStatus',data)
}

/* 门店接口 */
export function Store(data){
	return request('Store',data)
}

/* 门店详情接口 */
export function StoreDetail(data){
	return request('StoreDetail',data)
}

/* 全部门店接口 */
export function StoreList(data){
	return request('StoreList',data)
}

/* 门店分享接口，获取门店小程序码 */
export function StoreShare(data){
	return request('StoreShare',data)
}
/* 县级代理接口 */
export function CountyGgent(data){
	return request('CountyGgent',data)
}
/* 县级代理详情接口 */
export function CountyGgentDetail(data){
	return request('CountyGgentDetail',data)
}

/* 推广活动接口 */
export function PromotionActivity(data){
	return request('PromotionActivity',data)
}
/* 门店县级代理收益记录接口 */
export function CountyGgentProfit(data){
	return request('CountyGgentProfit',data)
}