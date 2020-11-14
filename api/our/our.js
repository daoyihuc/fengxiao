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