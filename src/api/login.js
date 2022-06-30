import request from '@/utils/request'
import axios from 'axios'



// // 注册方法
// export function register(data) {
//   return request({
//     url: '/auth/register',
//     headers: {
//       isToken: false
//     },
//     method: 'post',
//     data: data
//   })
// }

// // 刷新方法
// export function refreshToken() {
//   return request({
//     url: '/auth/refresh',
//     method: 'post'
//   })
// }

// // 获取用户详细信息
// export function getInfo() {
//   return request({
//     url: '/system/user/getInfo',
//     method: 'get'
//   })
// }

// // 退出方法
// export function logout() {
//   return request({
//     url: '/auth/logout',
//     method: 'delete'
//   })
// }

// // 获取验证码
// export function getCodeImg() {
//   return request({
//     url: '/code',
//     method: 'get',
//     timeout: 20000
//   })
// }

// // 现登录方法
// export function login(username, password, code, uuid) {
//   axios.defaults.baseURL = '/api'
//   return request({
//     xf_url: '/api',
//     url: '/ProxyService/Login?CustomMimeType=application/json',
//     method: 'post',
//     data: { username, password, code, uuid }
//   })
// }











// 注册方法
export function register(data) {
	return request({
		url: '/auth/register',
		headers: {
			isToken: false
		},
		method: 'post',
		data: data
	})
}

// 刷新方法
export function refreshToken() {
	return request({
		url: '/auth/refresh',
		method: 'post'
	})
}

// 获取用户详细信息
export function getInfo() {
	return request({
		// url: '/system/user/getInfo',
		url: '/ProxyService/aprc_web_user_getInfo',
		method: 'get'
	})
}

// 退出方法
export function logout() {
	return request({
		// url: '/auth/logout',
		url: '/ProxyService/aprc_web_logout',
		method: 'delete'
	})
}

// 获取验证码
export function getCodeImg() {
	return request({
		// url: '/code',
		url: '/ProxyService/aprc_captcha',
		method: 'get',
		timeout: 20000
	})
}

// 现登录方法
export function loginPost(username, password, code, uuid) {
	return request({
		// url: '/ProxyService/Login?CustomMimeType=application/json',
		url: '/ProxyService/aprc_web_login?CustomMimeType=application/json',
		method: 'post',
		data: {
			username,
			password,
			code,
			uuid
		}
	})
}

// 测试现登录方法
export function loginGet(username, password, code, uuid) {
	return request({
		// url: '/ProxyService/Login?CustomMimeType=application/json',
		url: '/ProxyService/aprc_web_loginGet?username=' + username + '&password=' + password + '&code=' + code + '&uuid=' + uuid ,
		method: 'get',
		data: {
			username,
			password,
			code,
			uuid
		}
	})
}

// 测试现登录方法
export function loginGetNoV(username, password, code, uuid) {
	return request({
		// url: '/ProxyService/Login?CustomMimeType=application/json',
		url: '/ProxyService/aprc_web_lGetNoV?username=' + username + '&password=' + password + '&code=' + code + '&uuid=' + uuid ,
		method: 'get',
		data: {
			username,
			password,
			code,
			uuid
		}
	})
}
