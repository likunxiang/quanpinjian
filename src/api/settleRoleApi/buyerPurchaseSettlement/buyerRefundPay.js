import request from '@/utils/request'
import axios from 'axios'

// web-查看需方退货退款列表
export function getList(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\settle\\demandRefund\\getList_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-结算管理-未结算
export function getUnPayListByMonth(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\settle\\demandRefund\\getUnPayListByMonth_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// // web-查看收款账号
// export function getDeBankAccount(data) {
//   axios.defaults.baseURL = '/api'
//   return request({
//     xf_url: '/api',
//     url: '/QueryData?SqlCmdName=web\\order\\settle\\demandRefund\\getDeBankAccount&DBC=w_m',
//     method: 'post',
//     data: data
//   })
// }

// web-查看收款账号
export function getPayAccount(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\settle\\demandRefund\\getPayAccount_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查看退货证明
export function getRefundDetail(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\settle\\demandRefund\\getRefundDetail_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查看退货验收情况详情
export function getSupplyAcceptDetail(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\settle\\demandRefund\\getSupplyAcceptDetail_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-系统验收通过
export function updateSuAccept(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\order\\settle\\demandRefund\\updateSuAccept_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-提交付款证明
export function submitPayProve(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\order\\settle\\demandRefund\\submitPayProve_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-结算管理-已结算
export function getPayListByMonth(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\settle\\demandRefund\\getPayListByMonth_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查看付款证明
export function getPaidProve(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\order\\settle\\demandRefund\\getPaidProve_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}


// web-查看原路退款付款证明
export function getReturnPaidProve(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\settle\\demandRefund\\getReturnPaidProve_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}
