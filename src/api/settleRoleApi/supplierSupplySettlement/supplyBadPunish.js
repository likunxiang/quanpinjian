import request from '@/utils/request'
import axios from 'axios'

// web-查看供方违约处罚收取列表
export function getList(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\settle\\supplyDisobey\\ft1\\getList_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-结算管理-未结算列表
export function getUnPayListByMonth(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\settle\\supplyDisobey\\ft1\\getUnPayListByMonth_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-结算管理-查看供方付款证明
export function getPayDetail(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\settle\\supplyDisobey\\ft1\\getPayDetail_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-结算管理-确认处罚收取
export function confirmPay(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\settle\\supplyDisobey\\ft1\\confirmPay_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-结算管理-已结算列表
export function getPayListByMonth(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\settle\\supplyDisobey\\ft1\\getPayListByMonth_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}
