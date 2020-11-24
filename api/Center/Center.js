import request from "../../utils/request.js"

/* 推广记录接口 */
export function PromotionLog(data){
	return request('PromotionLog',data)
}

/* 推广记录接口 */
export function PromotionCenter(data){
	return request('PromotionCenter',data)
}

/* 推广人海报接口 */
export function PromoterPoster(data){
	return request('PromoterPoster',data)
}

/* 元宝中心接口 */
export function YuanbaoCenter(data){
	return request('YuanbaoCenter',data)
}
/* 推广统计接口 */
export function PromotionStatistics(data){
	return request('PromotionStatistics',data)
}