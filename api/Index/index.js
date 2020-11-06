import request from "../../utils/request.js"

/* 
 首页
 */
export function getIndexData(data){
	return request('Index',data)
}