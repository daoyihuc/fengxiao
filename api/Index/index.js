import request from "../../utils/request.js"

/* 登录 */
export function Logn(data){
	return request('Login',data)
}
/* 
 首页
 */
export function getIndexData(data){
	return request('CardBag',data)
}

/* 卡包返现记录列表 */
export function RecurrenceRecord(data){
	return request('RecurrenceRecord',data)
}
/* 提现接口 */
export function Withdrawal(data){
	return request('Withdrawal',data)
}
/* 卡包提现记录接口 */
export function WithdrawalList(data){
	return request('WithdrawalList',data)
}



/* 个人信息接口 */
export function getinfot(data){
	return request('Mine',data)
}
/* 编辑个人信息接口 */
export function EditMine(data){
	return request('EditMine',data)
}


