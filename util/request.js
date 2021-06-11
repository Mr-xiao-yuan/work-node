const BASE_URL = 'http://127.0.0.1:3000'
export const myrequest = (query,mode,param) =>{
	return new Promise((resolve, reject) =>{
		uni.request({
			url: BASE_URL+query,
			method: mode || 'GET' || 'POST',
			data: param,
			success:(res)=>{
				if(res.statusCode !== 200){
					return uni.showToast({
						title:"获取数据失败"
					})
				}
				resolve(res)
			},
			fail:(err)=>{
				return uni.showToast({
					title:"获取接口失败"
				})
				reject(err)
			}
		})
	})
}