import loading from "../../components/public/loading.vue";
/* 接口名称 */
import { getIndexData } from "../../api/Index/index.js"
 export default{
	data() {
		return {
			isShow: true
		}
	},
	onLoad() {
		getIndexData({
			district_name: '开福区'
		}).then(res => {
			console.log(res)
		})

		setTimeout(() => {
			this.isShow = false
		}, 1000)

	},
	methods: {
		/* 提现跳转 */
		recurrence() {
			uni.navigateTo({
				url: 'Recurrence/Recurrence'
			})
		},
		/* 获取记录*/
		obtain() {
			uni.navigateTo({
				url: 'obtain/obtain'
			})
		},
		/* 提现跳转 */
		Withdrawal() {
			uni.navigateTo({
				url: 'Withdrawal/Withdrawal'
			})
		},
		/* 房屋跳转 */
		store_info() {
			uni.navigateTo({
				url: 'store_info/store_info'
			})
		},

	},
	components: {
		loading
	}
}
