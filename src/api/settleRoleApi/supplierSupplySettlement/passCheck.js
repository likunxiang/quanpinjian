import request from '@/utils/request'
import axios from 'axios'

// web-查看供方验收通过支付列表
export function getDoneList(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\settle\\supply\\getDoneList_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查看供方验收-结算管理-未结算
export function getUnPayListByMonth(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\settle\\supply\\getUnPayListByMonth_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-提交付款证明
export function submitPayProve(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\order\\settle\\supply\\submitPayProve_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查看供方验收-结算管理-已结算
export function getPaidListByMonth(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\settle\\supply\\getPaidListByMonth_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查看付款证明
export function getPaidProve(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\settle\\supply\\getPaidProve_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}